import { Footer } from "flowbite-react";

const Foot = () => {
    return (
        <div>
            <Footer bgDark>
                <div className="w-full">
                    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                        <div>
                            <Footer.Title title="Company" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    <img className="w-10 h-10" src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Careers
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Brand Center
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="help center" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Discord Server
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Twitter
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Facebook
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Contact Us
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Licensing
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="download" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">
                                    iOS
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Android
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Windows
                                </Footer.Link>
                                <Footer.Link href="#">
                                    MacOS
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                    <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            by="Flowbite™"
                            href="#"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="#"
                                icon="youtube"
                            />
                            <Footer.Icon
                                href="#"
                                icon="instagram"
                            />
                            <Footer.Icon
                                href="#"
                                icon="facebook"
                            />
                            <Footer.Icon
                                href="#"
                                icon="LinkedIn"
                            />
                            <Footer.Icon
                                href="#"
                                icon="Icon"
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Foot;