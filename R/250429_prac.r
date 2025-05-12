v1 <- c(5,4,6,7,11,NA,10,NA,NA)
v1
v2 <- na.omit(v1)
v2
v3 <- as.vector(v2)
v3


st <- data.frame(state.x77)
boxplot(st$Income)
bx <- boxplot.stats(st$Income)
bx

iris


