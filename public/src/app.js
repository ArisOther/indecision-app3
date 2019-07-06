// npx babel public/src/app.js --out-file=public/scripts/app.js --presets=@babel/env,@babel/react --watch

class IndecisionApp extends React.Component{
    render(){
        //Deklarasi semua variabel yg akan di gunakan semua class=======
        const title = 'ini adalah judul';
        const subtitle = 'ini adlaah subtitleku';
        const options = ['satu','dua','tiga'];
        
        //Deklarasi component2 yang ingin ditampilkan=========
        //setiap component mempunyai deklarasi props, mengambil dr variabel diatas
        //deklarasi props ini yg kemudian diambil sbg variabel dan diolah oleh  backend/class masing2 component

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Actions/>
                <Options options={options}/>
                
                <AddOption/>
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
    

    handlePick(){
        alert ('ini adalah handle pick');
        }
    
    
    render(){
        return (
            <div>
                <button onClick={this.handlePick}> ini adlah tombol</button>
                
            </div>
        );
    }

    

    
}



class RemoveAll extends React.Component{
    

    render(){
        return (
            <div>
                
            </div>
        )
    }
}


class Options extends React.Component{
    handleRemoveAll(){
        alert('remove all');
    }
    render(){
       return (
        <div>
            <button onClick={this.handleRemoveAll}>remove all</button>
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

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();

   const option = e.target.elements.option.value.trim();
   if(option){
    alert(option);
   }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}


const jsx = (
    <div>
        <Header />
        <Actions/>
        <Options/>
        <AddOption/>

    </div> 
);

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));