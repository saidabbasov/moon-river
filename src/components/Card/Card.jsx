import styles from "./Card.module.scss";
import { useForm } from "react-hook-form";

const Card = () => {

    const { register,
        handleSubmit, 
        formState: { 
          errors 
        },
        reset
      } = useForm();

        const onSubmit = (data) => {
            console.log(data)
              
            reset()
        }

    return <div className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
        
                <input 
                placeholder="Login" 
                {...register("name")}
                
                />
                {errors.name && <span>Err</span> }
           
                <input 
                placeholder="password"
                type='password'
                {...register("password")}
                
                />
                {errors.password && <span>Err</span> }
         
            <input type="submit" />
        </form>
    </div>
}

export default Card;