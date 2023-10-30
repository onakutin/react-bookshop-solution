export default function MainContent({ currentPage }) {
    return (
        <>
            <h1 className="app__headline">Flourish and Blotts</h1>

            {
                currentPage === ''
                    ? <h2>Welcome!!</h2>
                    : ''
            }

            {
                currentPage === 'about'
                    ? <h2>About us</h2>
                    : ''
            }

            {
                currentPage === 'contact'
                    ? <h2>Contact form</h2>
                    : ''
            }
        </>
    )
}