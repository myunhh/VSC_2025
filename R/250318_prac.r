score <- c(87, 95, 80, 90, 50)
names(score) <- c("A", "B", "C", "D", "E")

double_score <- score * 2
double_score

half_score <- score / 2
half_score

score[2]

#-----------------------------------------

score_of_student<- c(60, 80, 95)
name_of_student <- c("TOM", "MIKE", "JIM")
age_of_student <- c(15, 18, 19)

students_info <- list(name = name_of_student, score = score_of_student, age = age_of_student)

print("INFO_OF_MIKE")
students_info[[1]][2]
students_info[[2]][2]
students_info[[3]][2]

#-----------------------------------------

bt <- c('A', 'B', 'B', 'O', 'AB', 'A')
bt_new <- factor(bt)

bt[7]
bt_new[7]