function NotFound(){
    const style ={
        margin: '30px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 440px)'
    }
    return(
        <>
            <div class="container mt-4">
                <h1 style={style}>404 Not Found</h1>
            </div>
        </>
    )
}

export default NotFound;