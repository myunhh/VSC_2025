a <- matrix(1:20, nrow = 4, ncol = 5)
b <- matrix(1:20, nrow = 4, ncol = 5, byrow = T)

a
b

#-----------------------------------------------

c <- c(1:4)
d <- c(5:8)
e <- matrix(1:20, nrow = 4, ncol = 5)

m1 <- cbind(c,d)
m1
m2 <- rbind(c,d)
m2
m3 <- rbind(m2,c)
m3
m4 <- cbind(e,c)
m4

#-----------------------------------------------

score <- matrix(c(90, 85, 69, 78,
                  85, 96, 49, 95,
                  90, 80, 70, 60),
                  nrow = 4, ncol = 3)
score

rownames(score) <- c('John', 'Tom', 'Mark', 'Jane')
colnames(score) <- c('English', 'Math', 'Science')

score

t(score)

#-----------------------------------------------

iris.new <- iris

View(iris.new)

iris.new$Sepal.Width[3]
iris.new[3,1]

#-----------------------------------------------

IR_1 <- subset(iris, iris$Species=="setosa")
IR_1

IR_2 <- subset(iris, iris$Sepal.Length>5.0&iris$Sepal.Width>4.0)
IR_2
IR_2[,c(2,4)]
