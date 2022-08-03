import React from "react"

function MainContent() {
    return (
        <div>
            <main className="bg-custom-gray h-25">
                <section className="flex flex-col items-center pt-4">
                    <h1 className="text-white text-2xl font-bold">Laura Smith</h1>
                    <h3 className="text-tan text-xs">Frontend Developer</h3>
                    <h4 className="text-off-white pt-2 text-0.6">laurasmith.website</h4>
                    <div className="flex justify-center gap-4 mt-3">
                        <button className="bg-gray-300 w-28 h-8 rounded-md py-1 px-3 text-center shadow-sm"><i class="fa-solid fa-envelope text-gray-700 pr-2"></i><a href="#">Email</a></button>
                        <button className="bg-linkedin text-neutral-100 w-28 h-8 rounded-md py-1 px-3 text-center shadow-sm"><i className="fa-brands fa-linkedin pr-2"></i><a href="#">LinkedIn</a></button>
                    </div>
                </section>
                <section className="flex flex-col w-60 h-48 mx-auto text-off-gray">
                    <h2 className="pt-6 text-base">About</h2>
                    <p className="pt-1 text-0.6">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h2 className="text-base pt-6">Interests</h2>
                    <p className="pt-1 text-0.6">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </section>
            </main>
        </div>
    )
}

export default MainContent