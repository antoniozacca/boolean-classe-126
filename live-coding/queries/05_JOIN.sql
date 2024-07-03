1. Selezionare tutti gli studenti iscritti al Corso di Laurea in Economia

SELECT `students`.`name`, `students`.`surname`, `degrees`.`name`
FROM `degrees`
INNER JOIN `students` ON `students`.`degree_id` = `degrees`.`id`
WHERE `degrees`.`name` = "Corso di Laurea in Economia"

2. Selezionare tutti i Corsi di Laurea Magistrale del Dipartimento di Neuroscienze

SELECT
     `degrees`.`level`,
    `departments`.`name` AS `dipartimento`,
    `degrees`.`name` AS `corso_di_laurea`
FROM
    `departments`
INNER JOIN `degrees` ON `departments`.`id` = `degrees`.`department_id`
WHERE
    `departments`.`name` LIKE "%Neuroscienze" AND `degrees`.`level` = 'magistrale'
  
SELECT
     `degrees`.`level`,
    `departments`.`name` AS `dipartimento`,
    `degrees`.`name` AS `corso_di_laurea`
FROM
    `departments`
INNER JOIN `degrees` ON `departments`.`id` = `degrees`.`department_id`
WHERE
    `departments`.`name` = "Dipartimento di Neuroscienze" AND `degrees`.`level` = 'magistrale'
    

3. Selezionare tutti i corsi in cui insegna Fulvio Amato (id=44)

SELECT `courses`.`name`, `teachers`.`name`, `teachers`.`surname`
FROM `courses`
INNER JOIN `course_teacher` ON `courses`.`id` = `course_teacher`.`course_id`
INNER JOIN `teachers` ON `course_teacher`.`teacher_id` = `teachers`.`id` 
WHERE `course_teacher`.`teacher_id` = 44

SELECT `courses`.`name`, `teachers`.`name`, `teachers`.`surname`
FROM `courses`
INNER JOIN `course_teacher` ON `courses`.`id` = `course_teacher`.`course_id`
INNER JOIN `teachers` ON `course_teacher`.`teacher_id` = `teachers`.`id` 
WHERE `teachers`.`name` = "Fulvio" AND `teachers`.`surname` = "Amato"


4. Selezionare tutti gli studenti con i dati relativi al corso di laurea a cui sono iscritti e il relativo dipartimento, in ordine alfabetico per cognome e nome

SELECT
    `students`.`surname`,
    `students`.`name`,
    `students`.`registration_number`,
    `degrees`.`name`,
    `departments`.`name`
FROM
    `students`
JOIN `degrees` ON `students`.`degree_id` = `degrees`.`id`
JOIN `departments` ON `degrees`.`department_id` = `departments`.`id`
ORDER BY
    `students`.`surname`,
    `students`.`name`

5. Selezionare tutti i corsi di laurea con i relativi corsi e insegnanti

SELECT
    `degrees`.`name`, `teachers`.`name`, `teachers`.`surname`, `courses`.`name`
FROM
    `course_teacher`
INNER JOIN `teachers` ON `teachers`.`id` = `course_teacher`.`teacher_id`
INNER JOIN `courses` ON `courses`.`id` = `course_teacher`.`course_id`
INNER JOIN `degrees` ON `degrees`.`id` = `courses`.`degree_id`

6. Selezionare tutti i docenti che insegnano nel Dipartimento di Matematica (54)

#6. Selezionare tutti i docenti che insegnano nel Dipartimento di Matematica (54)
SELECT DISTINCT
    `teachers`.`id`,
    `teachers`.`name`,
    `teachers`.`surname`,
    `departments`.`name` AS `department_name`
FROM
    `teachers`
JOIN `course_teacher` ON `teachers`.id = `course_teacher`.`teacher_id`
JOIN `courses` ON `course_teacher`.course_id = `courses`.id
JOIN `degrees` ON `courses`.degree_id = `degrees`.id
JOIN `departments` ON `degrees`.department_id = `departments`.id
WHERE
    `departments`.`name` = 'Dipartimento di Matematica'
ORDER BY
    `teachers`.`id` ASC

7. BONUS: Selezionare per ogni studente il numero di tentativi sostenuti per ogni esame, stampando anche il voto massimo. Successivamente, filtrare i tentativi con voto minimo 18.


#7. BONUS: Selezionare per ogni studente il numero di tentativi sostenuti per ogni esame, stampando anche il voto massimo. Successivamente, filtrare i tentativi con voto minimo 18.
SELECT
    `students`.`id` AS `student_id`,
    `students`.`name` AS `student_name`,
    `students`.`surname` AS `student_surname`,
    COUNT(`exam_student`.`vote`) AS `attempt_count`,
    MAX(`exam_student`.`vote`) AS `max_grade`,
    MIN(`exam_student`.`vote`) AS `min_grade`
FROM
    `students`
INNER JOIN `exam_student` ON `students`.`id` = `exam_student`.`student_id`
INNER JOIN `exams` ON `exam_student`.`exam_id` = `exams`.`id`
GROUP BY  `students`.`id`, `exams`.`course_id`
HAVING `max_grade` > 18
ORDER BY `student_name`, `student_surname`