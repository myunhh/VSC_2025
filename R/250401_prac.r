setwd("D:/SSU_2025/data_analysis_basic_R/")

air <- read.csv("airquality.csv", header=T)
head(air)

my_iris <- subset(iris, Species == 'setosa')
write.csv(my_iris, "my_iris_2.csv", row.names=T)

sum <- function(x, y) {

  x+y

}
mkcsv <- function(file_name, data, row_names) {

  write.csv(data, file_name, row_names)

}

sum(2,3)

a <- matrix(data = 1:20, nrow = 4, ncol = 5)
mkcsv("test.csv", a, F)