import { useEffect, useState } from "react";
import { dbService } from "../firebase.conf";

function Home(props) {
    const [carList, setCarList] = useState([]);
    const [name, setName] = useState([]);
    const [company, setCompany] = useState([]);
    const [year, setYear] = useState([]);
    const [price, setPrice] = useState([]);

    // async function loadCarList() {
    //     const carCollection = await dbService.collection('car').get();
    //     let newList = [];
    //     carCollection.forEach(function (doc) {
    //         let car = doc.data();
    //         car.id = doc.id;
    //         newList.push(car);
    //     });
    //     setCarList(newList);
    // }

    function loadCarList() {
        dbService.collection('car').onSnapshot((snapshot)=>{
            let newCarList = snapshot.docs.map((doc)=>{
                return {id: doc.id, ... doc.data()}
            });
            setCarList(newCarList);
        });
    }


    useEffect(() => {
        loadCarList();
    }, []);

    return (<>
        <h3>Home</h3>
        <button onClick={e => { props.onLogout(); }} value="LogOut">LogOut</button>
        <hr />
        <table className="table">
            <thead>
                <tr>
                    <th>차종</th>
                    <th>제조사</th>
                    <th>연식</th>
                    <th>가격</th>
                    <th>추가</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input id="name" type="text" value={name} onChange={e => setName(e.target.value)} /></td>
                    <td><input id="company" type="text" value={company} onChange={e => setCompany(e.target.value)} /></td>
                    <td><input id="year" type="text" value={year} onChange={e => setYear(e.target.value)} /></td>
                    <td><input id="price" type="text" value={price} onChange={e => setPrice(e.target.value)} /></td>
                    <td><input id="addBtn" type="submit" value="추가" onClick={e => {
                        const newCar = { name, company, year, price };
                        dbService.collection('car').add(newCar);
                    }} /></td>
                </tr>
            </tbody>

        </table>
        <hr />
        <table className="table">
            <thead>
                <tr>
                    <th>순서</th>
                    <th>차종</th>
                    <th>제조사</th>
                    <th>연식</th>
                    <th>가격</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {carList.map(car => (
                    <tr key={car.id}>
                        <td>{car.id}</td>
                        <td>{car.name}</td>
                        <td>{car.company}</td>
                        <td>{car.year}</td>
                        <td>{car.price}</td>
                        <td><button>삭제</button></td>
                    </tr>


                ))}
            </tbody>
        </table>
        {console.log(carList)}
    </>);
}

export default Home;