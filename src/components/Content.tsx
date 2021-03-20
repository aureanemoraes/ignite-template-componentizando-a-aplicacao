interface ContentProps {
  children: React.ReactNode;
  selectedGenreTitle: string;
}

export function Content({children, selectedGenreTitle} : ContentProps) {
  // Complete aqui
  // <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenreTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {children}
        </div>
      </main>
    </div>
  );
}