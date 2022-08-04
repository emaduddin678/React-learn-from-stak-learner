import React, {Component} from "react"


// const MyAppd =  () => {
//     return <h1>I am Arrow function!</h1>
// }
// function MyCom () {
//     return (
//     <h2>I am function!</h2>
//     )
// }

class Child extends Component {
    render() {
        this.props.func(this)
        return <h1>I am Child</h1>
    }
}



class App extends Component{
    getContext(context) {
        console.log(context);
    }

    render() {
        // this.getContext(this)
        // const obj = {
        //     title: 'Title tag in Object',
        //     id: 'useid'
        // };
        // const name = "Emad"; 
        // const bio = (
        //     <div>
        //         <p>This is bio from object with html</p>
        //         <h3>Emad Uddin Emad</h3>
        //         <h2>{name}</h2>
        //         <h4>Class Roll: 39</h4>
        //         <p>Everything is possible</p>
        //     </div>
        // ); 

        return ( 
            <div className="center">
                <h1 title="Title tag">Hello Emad</h1>
                {/* <p {...obj}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tempora, amet inventore, dolor doloribus deserunt nulla et nemo consectetur quam quis cum dolore corporis illum modi nostrum dolores architecto numquam.</p> */}
                {/* <MyAppd />
                <MyCom /> */}
                {/* <h1>MY name is {name}</h1> */}
                <h3>using const variable in name</h3>
                <h1>Today's date is : {new Date().toLocaleDateString()}</h1>
                {/* {bio} */}
                {/* <Child func = {this.getContext}/> */}
            
            </div>   
        );
    }
}


export default App;       




// export default myAppd;
