import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
                <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                    © 2023 Copyright:
                    <a
                        className="text-neutral-800 dark:text-neutral-400 hover:text-blue-600"
                        href="https://github.com/pratyushsingha/"
                    >
                        <strong>pratyushsingha</strong>
                    </a>
                </div>
            </footer>

        </div>
    )
}

export default Footer
