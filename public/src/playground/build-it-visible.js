let visibility = false;

const togleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>visibility togle</h1>
            <button onClick={togleVisibility}>{visibility ?'sembunyikan' : 'perlihatkan'}</button>
            {visibility && (
                <div>
                    <p>aku tampak jelas</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};
    
render();