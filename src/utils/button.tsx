import { Buttontype } from '../types/index';

    const Button = ({children,...props}:Buttontype )=>{
        return(
        <button className="btn" {...props}>
                {children}
                </button>
        )
        
    }

    export {Button}