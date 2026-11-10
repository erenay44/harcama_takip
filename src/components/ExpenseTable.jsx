import { CATEGORIES, colorOf, formatTL } from "../data/categories";

export default function ExpenseTable({ expenses, filter, onFilter, onDelete }) {
  return (
    <section className="card">
      <div className="table-head">
        <h2>Harcamalar</h2>
        <select value={filter} onChange={(e) => onFilter(e.target.value)} aria-label="Kategori filtresi">
          <option value="Tümü">Tümü</option>
          {CATEGORIES.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
      </div>

      {expenses.length === 0 ? (
        <p className="empty">Henüz harcama yok. Soldaki formdan ilk harcamanı ekle.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Tarih</th>
                <th>Açıklama</th>
                <th>Kategori</th>
                <th className="num">Tutar</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((e) => (
                <tr key={e.id}>
                  <td>{new Date(e.date).toLocaleDateString("tr-TR")}</td>
                  <td>{e.title}</td>
                  <td>
                    <span className="badge" style={{ background: colorOf(e.category) }}>
                      {e.category}
                    </span>
                  </td>
                  <td className="num">{formatTL(e.amount)}</td>
                  <td>
                    <button className="danger" onClick={() => onDelete(e.id)} aria-label={`${e.title} harcamasını sil`}>
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
