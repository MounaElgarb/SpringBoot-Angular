DROP TABLE IF EXISTS tasks;
 
CREATE TABLE tasks (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  task VARCHAR(250) NOT NULL,
  detail VARCHAR(250) NOT NULL
);
 
INSERT INTO tasks (task, detail) VALUES
  ('Laurent', 'GINA'),
  ('Sophie', 'FONCEK'),
  ('Agathe', 'FEELING');