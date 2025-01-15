import db from "@/db/drizzle";

export default async function Home() {
  const users = await db.query.profile.findMany({
    columns: {
      name: true,
      nik: true,
    },
    with: {
      user: {
        columns: {
          email: true,
          phone: true,
        },
      },
    },
  });

  return (
    <div>
      {users.map((user) => (
        <div key={user.nik}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
}
