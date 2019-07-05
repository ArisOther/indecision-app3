// npx babel public/src/app.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch

class IndecisionApp extends React.Component{
    render(){
        //Deklarasi semua variabel yg akan di gunakan semua class=======
        const title = 'ini adalah judul';
        const subtitle = 'ini adlaah subtitle';
        const options = ['satu','dua','tiga'];
        
        //Deklarasi component2 yang ingin ditampilkan=========
        //setiap component mempunyai deklarasi props, mengambil dr variabel diatas
        //deklarasi props ini yg kemudian diambil sbg variabel dan diolah oleh  backend/class masing2 component

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Actions/>
                <Options options={options}/>
                <AddOptions/>
            </div>
        )
    }
}
//=============================================================================

class Header extends React.Component{
    render() {
        return (
        <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
        </div>
        ) 
    }
}

class Actions extends React.Component{
    render(){
        return (
            <div>
                <button>ini adlah tombol</button>
            </div>
        );
    }
}


class Options extends React.Component{
    render(){
       return (
        <div>
            {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
        </div>
       ); 
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOptions extends React.Component{
    render(){
        return (
            <div>
                ini adalah addoption
            </div>
        )
    }
}


const jsx = (
    <div>
        <Header />
        <Actions/>
        <Options/>
        <AddOptions/>

    </div> 
);

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));