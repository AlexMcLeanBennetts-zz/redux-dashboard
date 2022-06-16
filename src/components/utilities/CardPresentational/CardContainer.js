function CardContainer({ children }) {
    return (
        <section className='bg-white rounded shadow-lg hover:shadow-xl my-3 overflow-hidden'>
            {children}
        </section>
    )
}

export default CardContainer;