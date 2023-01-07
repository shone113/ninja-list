import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {

    //initialize hook
    const router = useRouter();

    useEffect(() =>{
        setTimeout(() => {
            //router.go(-1);
            router.push('/');
        }, 3000);
    }, []);

    return ( 
        <div className="not-found">
            <h1>The page cannot be found</h1>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;