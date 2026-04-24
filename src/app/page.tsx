'use client';

const projects = [
    {
        key: '0',
        href: "https://d2ab79atkak96r.cloudfront.net/Because_I_Saw_It_FinalCut.mp4",
        name: 'Because I Saw It',
    },
]

export default function HomePage() {
    return (
        <div className='font-mono flex flex-col items-center justify-items-center min-h-screen'>
            <main className='flex flex-col row-start-2 justify-items-center'>
                <div
                    id='Content'
                    className='flex flex-col w-full row-start-2 justify-items-center text-center'
                >
                    <div id='Title' className='flex flex-col justify-center w-screen h-screen'>
                        <p className='text-3xl md:text-8xl'>Claire Kupsaw</p>
                    </div>
                    {/* <hr style={{"height": 2, border: "none"}} /> */}
                    <div style={{background: "linear-gradient(to bottom, #3498db, #8e44ad)"}} />
                    {projects.map((project) => (
                        <div key={project.key} className='flex flex-col justify-center items-center h-screen'>
                            <a
                                className='hover:underline hover:underline-offset-4 text-center text-4xl mb-[24]'
                                href={project.href}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {project.name}
                            </a>
                            <video style={{width:"80vw"}} controls>
                                <source src={project.href} type="video/mp4" />
                            </video>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
