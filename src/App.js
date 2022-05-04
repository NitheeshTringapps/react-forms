import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      <h1>Registeration Form</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" {...register("firstName", { required: true })}/><br/><br/>
        {errors?.firstName?.type === "required" && <p>This field is required</p>}

        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" {...register("lastName", { required: true })}/><br/><br/>
        {errors?.lastName?.type === "required" && <p>This field is required</p>}

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" {...register("email", { required: true })}/><br/><br/>
        {errors?.email?.type === "required" && <p>This field is required</p>}

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" {...register("password", { required: true, pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$" })}/><br/><br/>
        {errors?.password?.type === "required" && <p>This field is required</p>}
        {errors?.password?.type === "pattern" && (<p>Enter valid format!</p>)}

        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" {...register("confirmPassword", { required: true, pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$"  })}/><br/><br/>
        {errors?.confirmPassword?.type === "required" && <p>This field is required</p>}
        {errors?.confirmPassword?.type === "pattern" && (<p>Enter valid format!</p>)}

        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default App;
