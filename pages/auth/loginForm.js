export default function LoginForm() {
  return (
    <div>
      <FormInputText control={control} name="username" label="Username" />
      <FormInputText control={control} name="password" label="Password" />
      <Button variant="outlined" type="submit">
        Login
      </Button>
    </div>
  );
}
