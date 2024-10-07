import { ModelPage } from "../../../page_components/ModelPage/ModelPage";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios, { AxiosResponse } from 'axios';
import { ParsedUrlQuery } from 'node:querystring';
import { useSetup } from "../../../hooks/useSetup";
import { setLocale } from "../../../helpers/locale.helper";
import { ModelsInterface, ModelByIdInterface } from "../../../interfaces/models.interface";


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
    const { data: models }: AxiosResponse<ModelsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN
        + '/api/models/?page=1&per_page=100', 
        {
            headers: {
                'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
            },
        });

    const locales = ['en', 'ru'];

    const paths: any[] = [];

    models.result.models.map(model => {
        return locales.map((locale) => {
            return paths.push({
                params: { model: model.id },
                locale,
            });
        });
    });

    return {
        paths: paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<ModelProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    try {
        const { data: model }: AxiosResponse<ModelByIdInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/model?model_id=' + params.model,
            {
                headers: {
                    'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
                },
            });

        return {
            props: {
                model
            }
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
