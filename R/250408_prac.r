iris_new <- iris
idx <- which(iris_new$Petal.Length>5.0)
iris_big <- iris[idx,]
iris_big

cars_new <- cars
speed <- cars_new[,1]
dist <- cars_new[,2]

num <- c(1,5,2,4,5,4,2,3,4,1,2,3,2,2,2,5,5,2,1)

par(mfrow=c(2,2))

plot(dist)
barplot(speed)
pie(num)
boxplot(dist)

par(mfrow=c(1,1))
