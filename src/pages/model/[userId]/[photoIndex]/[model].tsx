import { ModelPage } from "../../../../../page_components/ModelPage/ModelPage";
import Head from "next/head";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import axios, { AxiosResponse } from 'axios';
import { useSetup } from "../../../../../hooks/useSetup";
import { setLocale } from "../../../../../helpers/locale.helper";
import { ModelByIdInterface } from "../../../../../interfaces/models.interface";


function Model({ model }: ModelProps): JSX.Element {
    const { router } = useSetup();

    return (
        <>
            <Head>
                <title>{setLocale(router.locale).divo + ' | '
                    + setLocale(router.locale).model + ' - ' + model.result.id}</title>
                <meta name='description' content={setLocale(router.locale).divo + ' | '
                    + setLocale(router.locale).model + ' - ' + model.result.id} />
                <meta property='og:title' content={setLocale(router.locale).divo + ' | '
                    + setLocale(router.locale).model + ' - ' + model.result.id} />
                <meta property='og:description' content={setLocale(router.locale).divo + ' | '
                    + setLocale(router.locale).model + ' - ' + model.result.id} />
                <meta charSet="utf-8" />
            </Head>
            <ModelPage model={model} />
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data } = await axios.get(`${process.env.API_DOMAIN}/api/models/`, {
            headers: {
                'X-API-Key': process.env.API_KEY,
            },
            params: {
                page: 1,
                per_page: 100,
            }
        });

        const paths = data.models.map((model: { id: string, user_id: string, photo_index: string }) => ({
            params: {
                model: model.id,
                userId: model.user_id,
                photoIndex: model.photo_index
            }
        }));

        return {
            paths,
            fallback: 'blocking',
        };
    } catch (error) {
        console.error("Error fetching models for static paths:", error);
        return {
            paths: [],
            fallback: 'blocking',
        };
    }
};

export const getStaticProps: GetStaticProps<ModelProps> = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    try {
        const { data: model }: AxiosResponse<ModelByIdInterface> = await axios.get(process.env.API_DOMAIN +
            `/api/model?model_id=${params.model}&user_id=${params.userId}&photo_index=${params.photoIndex}`,
            {
                headers: {
                    'X-API-Key': process.env.API_KEY,
                },
            });

        return {
            props: {
                model,
            },
            revalidate: 60,
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface ModelProps extends Record<string, unknown> {
    model: ModelByIdInterface,
}

export default Model;
