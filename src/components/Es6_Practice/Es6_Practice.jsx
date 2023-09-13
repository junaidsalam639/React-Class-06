import React, { useState } from 'react'

const Es6_Practice = () => {
    const [num, setNum] = useState('');
    const [num1, setNum1] = useState('');
    const [data, setData] = useState([]);
    // Es6 Promises
    function num_submit() {
        let promise = new Promise((resolve, reject) => {
            if (num < num1) {
                let fech = fetch('https://dummyjson.com/products')
                    .then((data) => {
                        return data.json()
                    })
                    .then((res) => {
                        console.log(res);
                        resolve(res)
                    })
            } else {
                reject('reject')
            }
        })
        promise.then((right) => {
            console.log('Promise', right.products);
            setData(right.products)
            alert('Promise resolve')
        }).catch((e) => {
            console.log('Promise', e);
            alert('Promise ' + e)
        })
    }

    //Es6 CallBack
    function abc(e, call) {
        console.log(e)
        call(20)
    }
    abc(10, function (data) {
        console.log('I am callback function', data);
    })

    //Es6 Promises Async/Await
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved')
        }, 4000);
    })

    async function ayncFun() {
        let prom = await promise1;
        console.log(prom);
        console.log('Hello!');
    }
    ayncFun();

    // Es6 Prototypes || Constructor
    function Plan(first, last, age, eyecolor) {
        this.firstName = first;
            this.lastName = last;
            this.Age = age;
            this.eyeColor = eyecolor;
    }
    const myFather = new Plan("John", "Doe", 50, "blue");
    const myMother = new Plan("Sally", "Rally", 48, "green");
    console.log(myFather);
    console.log(myMother);

    const style = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    }

    return (
        <div className='App'>
            <h1>Api_Data_Fecth</h1>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} placeholder='enter your Num' /> <br /><br />
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='enter your Num' /> <br /><br />
            <button onClick={num_submit}>submit</button>

            {
                data.map((element, index, array) => {
                    console.log(element);
                    return <section className="articles" key={element.id} style={style}>
                        <article>
                            <div className="article-wrapper">
                                <figure>
                                    <img src={element.thumbnail} alt="" />
                                </figure>
                                <div className="article-body">
                                    <h2>{element.brand}</h2>
                                    <h3> {element.description}</h3>
                                    <a href="#" className="read-more">
                                        Read more <span className="sr-only">about this is some title</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </section>
                })

            }

        </div >
    )
}

export default Es6_Practice
