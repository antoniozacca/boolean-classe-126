1. Contare quanti iscritti ci sono stati ogni anno

SELECT
    COUNT(`id`) AS `quanti_iscritti`, YEAR(`enrolment_date`) AS `anno_iscrizione`
FROM
    `students`
GROUP BY `anno_iscrizione`
ORDER BY `quanti_iscritti`


2. Contare gli insegnanti che hanno l'ufficio nello stesso edificio

SELECT
    `office_address`,
    COUNT(`id`) AS `number_teacher`
FROM
    `teachers`
GROUP BY
    `office_address`
HAVING `number_teacher` <> 1



3. Calcolare la media dei voti di ogni appello d'esame

SELECT
    COUNT(`exam_id`) AS `numero_esami`,
    AVG(`vote`) AS `media_voto`
FROM
    `exam_student`
GROUP BY
    `exam_id`;


SELECT
    `exam_id`,
    AVG(`vote`) AS `media_voto`
FROM
    `exam_student`
GROUP BY
    `exam_id`;

SELECT
    `exam_id`,
    ROUND(AVG(`vote`), 3) AS `media_voto`
FROM
    `exam_student`
GROUP BY
    `exam_id`;


4. Contare quanti corsi di laurea ci sono per ogni dipartimento

SELECT
    COUNT(`id`) AS `num_degrees`,
    `department_id`
FROM
    `degrees`
GROUP BY
    `department_id`
ORDER BY `department_id`