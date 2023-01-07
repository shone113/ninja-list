import Navbar from "../../comps/Navbar";
import styles from "../../styles/Ninjas.module.css";
import Link from 'next/link';

//runs at buildtime
export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {users: data}
    }
}

const Ninjas = ({ users }) => {
    return (  
        <div>
            <h1>All Ninjas</h1>
            {users.map(user => (
                <Link href={'/ninjas/' + user.id} key={user.id}>
                    <div className={styles.single}>
                        <h3>{user.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Ninjas;