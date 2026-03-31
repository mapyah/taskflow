import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

interface Project { id: string; name: string; color: string; }
interface SidebarProps { 
  projects: Project[]; 
  isOpen: boolean;
  onRename: (project: Project) => void;
  onDelete: (id: string) => void;
}

export default function Sidebar({ projects, isOpen, onRename, onDelete }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <h2 className={styles.title}>Mes Projets</h2>
      <ul className={styles.list}>
        {projects.map(p => (
          <li key={p.id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <NavLink
                to={`/projects/${p.id}`}
                className={({ isActive }) =>
                  `${styles.item} ${isActive ? styles.active : ''}`
                }
              >
                <span
                  className={styles.dot}
                  style={{ background: p.color }}
                />
                {p.name}
              </NavLink>
              <button 
                onClick={() => onRename(p)}
                title="Renommer"
                style={{ padding: '4px 8px', cursor: 'pointer', fontSize: '12px' }}
              >
                ✏️
              </button>
              <button 
                onClick={() => onDelete(p.id)}
                title="Supprimer"
                style={{ padding: '4px 8px', cursor: 'pointer', fontSize: '12px' }}
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}