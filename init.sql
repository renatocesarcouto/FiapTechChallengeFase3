CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(120) NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    content TEXT NOT NULL
);

INSERT INTO posts (title, author, content) VALUES
('Introducao a Matematica', 'Prof. Maria Silva', 'Esse post é sobre matamatica. Esse post é sobre matamatica. Esse post é sobre matamatica. Esse post é sobre matamatica. Esse post é sobre matamatica. Esse post é sobre matamatica. '),
('Historia do Brasil', 'Prof. João Santos', 'Entendendo a historia do Brail. Entendendo a historia do Brail. Entendendo a historia do Brail. Entendendo a historia do Brail. Entendendo a historia do Brail. Entendendo a historia do Brail. '),
('Experimento de CiÊncia', 'Prof. Ana Oliveira', 'Simples experimentos para a sala de aula... Simples experimentos para a sala de aula... Simples experimentos para a sala de aula... Simples experimentos para a sala de aula... Simples experimentos para a sala de aula... ');
