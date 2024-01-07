
import { FC } from "react";

export const CreateTokenView: FC = ({ }) => {

    return (
        <div className="md:hero mx-auto p-4" >
            <div className="md:hero-content flex flex-col">
                <div className="flex flex-col gap-12 landing-md:gap-6">
                    Create token
                    <div className="w-full">
                        <div className="w-full relative mt-8 landing-sm:mt-12 landing-lg:mt-20 pb-4 landing-md:pb-10 dark:bg-landing-packages-dark bg-landing-packages dark:bg-gray-800 bg-gray-50 rounded-2xl landing-sm:rounded-3xl overflow-hidden">
                            <div className="landing-packages-mask pt-4 landing-md:pt-10">
                                <div className="landing-packages-mask pt-4 landing-md:pt-10"> Something here </div>
                                <div className="text-base dark:text-gray-400 text-gray-600">Inner block, form text etc.</div>

                                <div className="not-prose mt-4 landing-sm:mt-6 landing-lg:mt-10 px-4 landing-sm:px-10">
                                    <h6 className="p-0 font-semibold text-base landing-sm:text-2xl dark:text-gray-300 text-gray-900">Some heading h6</h6>
                                    <div className="not-prose flex items-center justify-between flex-wrap gap-4 landing-sm:gap-8">
                                        <p className="p-0 mt-2 landing-sm:mt-4 text-base dark:text-gray-400 text-gray-600">Paragraph</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="card w-full p-6 bg-base-100 shadow-xl mt-2">
                        <div className="text-xl font-semibold inline-block">
                            Current Leads
                            <div className="inline-block float-right">
                                <div className="inline-block float-right">
                                    <button className="btn px-6 btn-sm normal-case btn-primary">Add New</button>
                                </div>
                            </div>
                        </div>
                        card content
                    </div>



                </div>
            </div>
        </div>

    );
};
