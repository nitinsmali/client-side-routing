const activityItems = [
  { title: 'New user session created', time: '2 minutes ago' },
  { title: 'Route /products/p2 visited', time: '12 minutes ago' },
  { title: 'Settings page reviewed', time: '1 hour ago' },
]

function Activity() {
  return (
    <section className="page activity-panel">
      <h2>Recent activity</h2>
      <ul>
        {activityItems.map((item) => (
          <li key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Activity
