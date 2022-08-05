import{useSelector} from 'react-redux';

function Child01() {
    let 체중 = useSelector((state)=>{return state.체중})
    let 키 = useSelector((state)=>{return state.키})
    
    return (<div>
        <h2>child 01</h2>
        <p>체중 : {체중}</p>
        <p>신장 : {키}</p>
    </div>)
}

export default Child01;
