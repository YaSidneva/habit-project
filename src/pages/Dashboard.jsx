export default function Dashboard() {

    const user = JSON.parse(localStorage.getItem('telegram_user'))

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>ghbdtn</h2>
            {user ? (
                <p>Welcome {user.first_name}</p>
            ) : (
                <p>No user</p>

            )}
        </div>
    )
}