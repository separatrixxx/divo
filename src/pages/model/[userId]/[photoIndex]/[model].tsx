import { ModelPage } from "../../../../../page_components/ModelPage/ModelPage";
import Head from "next/head";
import { GetServerSideProps } from 'next';
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

export const getServerSideProps: GetServerSideProps<ModelProps> = async ({ params }) => {
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
