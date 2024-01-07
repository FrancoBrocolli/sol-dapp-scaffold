import type { NextPage } from "next";
import Head from "next/head";
import { CreateTokenView } from "../views";

const CreateToken: NextPage = (props) => {
    return (
        <div>
            <Head>
                <title>Solana Scaffold</title>
                <meta
                    name="description"
                    content="Create your meme token"
                />
            </Head>
            <CreateTokenView />
        </div>
    );
};

export default CreateToken;
