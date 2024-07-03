-- 1. Contare i corsi raggruppati per cfu

SELECT
    COUNT(`id`) AS `cfu_number`,
    `cfu`
FROM
    `courses`
GROUP BY
    `cfu`
ORDER BY
    `cfu`;

-- 2. Selezionare il voto più basso dato ad ogni appello d'esame

SELECT
    MIN(`vote`) AS `min_vote`,
    MAX(`vote`) AS `max_vote`,
    AVG(`vote`) AS `avg_vote`,
    `exam_id`
FROM
    `exam_student`
GROUP BY
    `exam_id`;


-- 3. Contare gli appelli d'esame del mese di luglio raggruppati per giorno

-- 3. Contare gli appelli d'esame del mese di luglio raggruppati per giorno

SELECT COUNT(`id`) AS `appelli_esame`, DAY(`date`) AS `giorno_appello`
FROM `exams`
WHERE MONTH(`date`) = 7 AND YEAR(`date`) = 2020
GROUP BY  `giorno_appello`
