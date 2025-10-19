# 이산수학

## 제1부: 기초 다지기 - 집합과 논리

이산수학의 여정은 우리가 다룰 대상(집합)을 정의하고, 그 대상에 관해 추론할 언어(논리)를 배우는 것에서 시작한다. 이 장에서는 수학적 사고의 기본 어휘와 문법을 확립한다.

---

### 1.1절: 집합의 언어

**집합(set)**은 순서가 없는 객체들의 명확한 모임이다. 이 절에서는 집합을 정의하고, 집합 간 관계를 기술하며, 집합을 조작하는 기본 연산을 학습한다.

#### 핵심 개념

* **집합의 정의와 표기법**

  * 원소 나열법: (A={1,2,3,4}).
  * 조건 제시법: (B={,x\mid x\text{는 양의 짝수},}).
  * 순서와 중복 무시: ({1,2,3}={3,1,2}).

* **기수(Cardinality)**

  * 유한 집합 (X)의 기수는 원소 수이며 (|X|)로 표기한다. 예: (A={1,2,3,4}\Rightarrow |A|=4).

* **주요 수의 집합**

  | 기호           | 집합  | 원소의 예                                    |
  | ------------ | --- | ---------------------------------------- |
  | (\mathbb{Z}) | 정수  | (-3,0,2,145)                             |
  | (\mathbb{Q}) | 유리수 | (-\tfrac13,0,\tfrac{24}{15})             |
  | (\mathbb{R}) | 실수  | (-3,-1.766,0,\tfrac{4}{15},\sqrt{2},\pi) |

  위첨자/하첨자 표기: (\mathbb{Z}^+) (양의 정수), (\mathbb{R}_{\ge 0}) (음이 아닌 실수) 등.

* **원소 관계와 특수 집합**

  * 원소성: (x\in X), 비원소성: (x\notin X).
  * 공집합: (\varnothing) 또는 ({}).

* **집합 간의 관계**

  * 동등: (X=Y\iff (\forall x)(x\in X\leftrightarrow x\in Y)).
  * 부분집합: (X\subseteq Y); 진부분집합: (X\subset Y).

* **멱집합(Power Set)**

  * (\mathcal{P}(X)={A\mid A\subseteq X}); (|X|=n\Rightarrow |\mathcal{P}(X)|=2^n).

* **집합 연산**

  $$
  X\cup Y={x\mid x\in X\ \lor\ x\in Y},\quad X\cap Y={x\mid x\in X\ \land\ x\in Y},
  $$

  $$
  X\setminus Y={x\mid x\in X\ \land\ x\notin Y},\quad X^c=\complement_U X=U\setminus X.
  $$

* **벤 다이어그램**: 전체집합은 사각형, 부분집합은 원으로 표현한다.

* **분할(Partition)**: (\mathcal{S}\subseteq \mathcal{P}(X))가 서로소이고 공집합이 아니며 (\bigcup\mathcal{S}=X)이면, (\mathcal{S})는 (X)의 분할이다.

* **데카르트 곱**: (X\times Y={(x,y)\mid x\in X,\ y\in Y}). 일반적으로 (X\times Y\ne Y\times X).

#### 예제 분석

* **예제 1.1.1 (기수)**: ({\mathbb{R},\mathbb{Z}})의 기수는 (2).

* **예제 1.1.2 & 1.1.3 (집합의 동등성)**

  * (A={1,3,2},\ B={2,3,2,1}\Rightarrow A=B) (순서·중복 무시).
  * (C={x\mid x^2+x-6=0}). 인수분해 ((x+3)(x-2)=0\Rightarrow C={-3,2}=D).

* **예제 1.1.5 & 1.1.6 (부분집합)**

  * (C={1,3},\ A={1,2,3,4}\Rightarrow C\subseteq A).
  * (X={x\mid x^2+x-2=0}={-2,1}\subseteq \mathbb{Z}).

* **예제 1.1.9 (부분집합 아님)**

  * (X={x\mid 3x^2-x-2=0}={-\tfrac23,1}\not\subset \mathbb{Z}) ((-\tfrac23\notin\mathbb{Z})).

* **예제 1.1.14 (멱집합)**

  * (A={a,b,c}\Rightarrow \mathcal{P}(A)={\varnothing,{a},{b},{c},{a,b},{a,c},{b,c},A}), (|\mathcal{P}(A)|=8).

* **예제 1.1.15 (집합 연산)**

  * (A={1,3,5},\ B={4,5,6})일 때 (A\cup B={1,3,4,5,6}), (A\cap B={5}), (A\setminus B={1,3}), (B\setminus A={4,6}).

* **예제 1.1.18 (여집합)**

  * (U={1,2,3,4,5},\ A={1,3,5}\Rightarrow A^c={2,4}).
  * (U={1,3,5,7,9}\Rightarrow A^c={7,9}).

* **예제 1.1.21 (벤 다이어그램)**

  * 총원 165, 단일/교집합 수를 이용해 적어도 한 과목 수강자는 156명, 따라서 미수강자는 (165-156=9).

* **예제 1.1.26 (데카르트 곱)**

  * (X={1,2,3},\ Y={a,b}). (X\times Y={(1,a),(1,b),(2,a),(2,b),(3,a),(3,b)}), (Y\times X={(a,1),(a,2),(a,3),(b,1),(b,2),(b,3)}). (|X\times Y|=|X|\cdot|Y|=6).

---

### 1.2절: 명제의 구조

**명제(proposition)**는 참(T) 또는 거짓(F) 중 하나의 진리값을 갖는 문장이다.

* 논리 연산자: 부정 (\neg p), 논리곱 (p\wedge q), 논리합 (p\vee q).

* 진리표 (요지):

  | (p) | (q) | (p\wedge q) | (p\vee q) | (\neg p) |
  | --- | --- | ----------- | --------- | -------- |
  | T   | T   | T           | T         | F        |
  | T   | F   | F           | T         | F        |
  | F   | T   | F           | T         | T        |
  | F   | F   | F           | F         | T        |

* 연산자 우선순위: (\neg) → (\wedge) → (\vee).

**예제**

* (p:) 비가 내린다, (q:) 춥다.

  * (p\wedge q:) 비가 내리고 춥다.
  * (p\vee q:) 비가 내리거나 춥다.

* (p:) “1 데케이드는 10년” (T), (q:) “1 밀레니엄은 100년” (F). (p\wedge q=\text{F}).

* 복합: (p=\text{F},\ q=\text{T},\ r=\text{F})일 때 (\neg p\vee(q\wedge r)=\text{T}).

* 검색 예: 구글 질의어 “"Shonda Rhimes" (Grey's OR Scandal) -Murder”. 논리적 해석: 포함/또는/비포함.

---

### 1.3절: 조건 명제와 논리적 동치

* 조건: (p\to q). 진리표에서 (p=\text{T},q=\text{F})일 때만 거짓. (p=\text{F})이면 무의미하게 참(vacuously true).
* 역/대우: 역 (q\to p), 대우 (\neg q\to \neg p). (p\to q\equiv \neg q\to \neg p).
* 충분/필요: (p\to q)에서 (p)는 충분조건, (q)는 필요조건.
* 쌍조건: (p\leftrightarrow q).
* 드모르간: (\neg(p\vee q)\equiv (\neg p\wedge \neg q)), (\neg(p\wedge q)\equiv (\neg p\vee \neg q)).
* 부정: (\neg(p\to q)\equiv p\wedge \neg q).

**예제**

* (p:1>2=\text{F}), (q:4<8=\text{T}). (p\to q=\text{T},\ q\to p=\text{F}).
* “제리가 장학금을 받으면((p)) 대학에 간다((q))”: 상황 (p=\text{F},q=\text{T}\Rightarrow p\to q=\text{T}), 역 (q\to p=\text{F}).
* 진리표로 (\neg(p\vee q)\equiv \neg p\wedge \neg q) 확인.

---

### 1.4절: 논법과 추론 규칙

* 논법(argument): 전제들의 집합과 결론으로 구성. 유효(valid): 전제가 모두 참이면 결론이 반드시 참.

대표 규칙:

$$
\frac{p\to q,\ p}{\therefore q}\ (\text{Modus Ponens}),\quad
\frac{p\to q,\ \neg q}{\therefore \neg p}\ (\text{Modus Tollens}),
$$

$$
\frac{p\vee q,\ \neg p}{\therefore q}\ (\text{Disjunctive Syllogism}),\quad
\frac{p\to q,\ q\to r}{\therefore p\to r}\ (\text{Hypothetical Syllogism}).
$$

* 무효 예: 결론 확정의 오류 (\dfrac{p\to q,\ q}{\therefore p}).

---

### 1.5절: 한정 기호를 이용한 일반화

* 명제함수/술어 (P(x)). 논의 영역 (D).
* 전칭: (\forall x,P(x)); 존재: (\exists x,P(x)).
* 반례: (\forall x\in\mathbb{R}(x^2-1>0))은 (x=1)이 반례.
* 부정(일반 드모르간): (\neg\forall x P\equiv \exists x\neg P), (\neg\exists x P\equiv \forall x\neg P).
* 추론 규칙(요지): 전칭 예시화, 전칭 일반화, 존재 예시화, 존재 일반화.

예:

* (\exists x\in\mathbb{R}\big(\tfrac{x}{x^2+1}=\tfrac{2}{5}\big))은 (x=2)로 참.
* “모든 실수 (x)에 대해 (x>1\Rightarrow x+1>1)”: 경우분석 또는 직접 증명으로 참.
* 전칭 부정식 논법 응용: (\forall x(\text{정수}(x)\to \text{유리}(x)),\ \neg\text{유리}(\sqrt2)\Rightarrow \neg\text{정수}(\sqrt2)).

---

### 1.6절: 다중 한정 기호

* 순서의 의미:

  * (\forall x\forall y,P(x,y)\equiv \forall y\forall x,P(x,y)).
  * (\exists x\exists y,P(x,y)\equiv \exists y\exists x,P(x,y)).
  * (\forall x\exists y,P(x,y)\not\equiv \exists y\forall x,P(x,y)).
* 예:

  * (\forall m\in\mathbb{Z},\exists n\in\mathbb{Z}(m<n)): 참.
  * (\exists n,\forall m(m<n)): 거짓.
  * (\forall x\in\mathbb{R},\exists y\in\mathbb{R}(x+y=0)): 참 ((y=-x)).
  * (\exists y,\forall x(x+y=0)): 거짓.
* 부정 예: (\neg\exists x\forall y(xy<1)\equiv \forall x\exists y(xy\ge 1)). 원문은 (x=0)로 원명이 참, 부정은 거짓.

---

## 제2부: 논증의 기술 - 증명

### 2.1절: 직접 증명 및 반례

* 직접 증명: (p\to q)에서 (p)를 가정하고 정의·공리·정리로 (q) 도출.
* 짝/홀 정의: 짝수 (n=2k), 홀수 (n=2k+1) ((k\in\mathbb{Z})).
* 반증: 전칭명제의 반례 제시.

예:

* 홀수 (m), 짝수 (n\Rightarrow m+n)은 홀수: (m=2k_1+1,\ n=2k_2\Rightarrow m+n=2(k_1+k_2)+1).
* 집합 항등: (X\cap(Y\setminus Z)=(X\cap Y)\setminus (X\cap Z)) 상호 포함으로 증명.
* (\forall n\in\mathbb{Z}^+\ (2^n+1\text{은 소수}))의 반례: (n=3\Rightarrow 2^3+1=9).
* 분배 실패 반례: ((A\cap B)\cup C\ne A\cap(B\cup C))에 대한 구체적 반례.

### 2.2절: 기타 증명 방법

* 모순법: (p\wedge \neg q\Rightarrow \bot)을 보여 (p\to q)를 증명.
* 대우법: (\neg q\to \neg p) 증명.
* 경우의 수: (p\equiv p_1\vee\cdots\vee p_n)으로 분해하여 각 경우 증명.
* 동치 증명: (p\leftrightarrow q)는 두 방향 모두 증명.

예:

* (n^2) 짝수 (\Rightarrow n) 짝수: 대우로 (n) 홀수 (\Rightarrow n^2) 홀수.
* (\sqrt2) 무리수: 기약분수 가정 후 (p^2=2q^2\Rightarrow p,q) 모두 짝수 모순.
* 모든 (x\in\mathbb{R})에 대해 (x\le |x|): 부호에 따른 경우 증명.
* (n-1) 짝수 (\leftrightarrow n) 홀수: 양방향 증명.

### 2.3절: 분해 증명 — 파스칼 항등식

(\binom{n+1}{k}=\binom{n}{k}+\binom{n}{k-1}\quad(1\le k\le n))

정의 (\binom{n}{k}=\dfrac{n!}{k!(n-k)!})로 통분하여 좌변과 일치시킨다.

### 2.4절: 수학적 귀납법

* 기초 단계: (P(n_0)) 참.
* 귀납 단계: 임의의 (k\ge n_0)에 대해 (P(k)\Rightarrow P(k+1)).

예 1: (1+2+\cdots+n=\dfrac{n(n+1)}{2}). 예 2: (1+3+\cdots+(2n-1)=n^2). 예 3: (n^3-n)은 3의 배수 (귀납 전개로 3배수의 합).

---

## Chapter 3 함수, 수열, 관계

### 3.1 함수

* **정의 3.1.1**: (f\subseteq X\times Y)가 (\forall x\in X)에 대해 (\exists!,y\in Y)로 ((x,y)\in f)이면 (f:X\to Y)를 함수라 한다. 정의역 (X), 공변역 (Y), 치역 (\operatorname{ran}(f)\subseteq Y).
* 예: (f={(1,a),(2,b),(3,a)})는 (X={1,2,3}\to Y={a,b,c})의 함수, 치역 ({a,b}).
* 비예: 정의역 원소가 빠지거나(예: 4 미정) 하나의 (x)가 둘 이상의 (y)에 연결되면 함수가 아님.
* 표기: ((x,y)\in f\iff f(x)=y). 예: (f(x)=x^2) (정의역 (\mathbb{R}), 치역 (\mathbb{R}_{\ge 0})).

**주요 함수·연산자**

* 나머지: (x\bmod y)는 (x)를 (y)로 나눈 나머지.
* Luhn 알고리즘 (요지): 오른쪽에서 한 칸씩 건너뛰어 두 배→두 자리수는 자리수 합→총합 (S)의 일의 자리 (d)에 대해 체크 디지트 (c=(10-d)\bmod 10).
* 해시: 예 (h(n)=n\bmod 11). 충돌 (h(x)=h(y)) 처리는 별도 전략.
* 의사난수(선형 합동법): (x_n=(a x_{n-1}+c)\bmod m), 시드 (x_0=s).
* 바닥/천장: (\lfloor x\rfloor,\ \lceil x\rceil). 몫 (q=\lfloor n/d\rfloor), 나머지 (r=n-dq).

**함수의 성질**

* 단사: (\forall x_1,x_2, f(x_1)=f(x_2)\Rightarrow x_1=x_2).
* 전사: (\forall y\in Y,\exists x\in X: f(x)=y).
* 전단사: 단사 ∧ 전사.
* 역함수(전단사일 때): (f^{-1}={(y,x)\mid (x,y)\in f}).
* 합성: ((f\circ g)(x)=f(g(x))).

**이진/단항 연산자**

* 이진: (\ast:X\times X\to X). 예: (+,\times,\wedge,\vee).
* 단항: (u:X\to X). 예: 보완 (X\mapsto X^c), 논리 부정 (\neg).

---

### 3.2 수열과 문자열

* **정의 3.2.1**: 수열 (s)는 정의역이 정수 부분집합인 함수. 표기 (s_n).
* 분류: 증가((i<j\Rightarrow s_i<s_j)), 감소, 비감소((\le)), 비증가((\ge)).
* 부분수열: 지수열 (n_1<n_2<\cdots)에 대해 ({s_{n_k}}).
* 합/곱: (\sum_{i=m}^n a_i), (\prod_{i=m}^n a_i).
* 문자열: 유한 집합 (X) 위의 유한 수열. 널 문자열 (\lambda). 길이 (|\alpha|). 연접 (\alpha\beta). 부분 문자열의 정의: (\alpha=\gamma\beta\delta)를 만족하면 (\beta)는 (\alpha)의 부분 문자열.

---

### 3.3 관계

* **정의 3.3.1**: 관계 (R\subseteq X\times Y). (xRy\iff (x,y)\in R). (X=Y)이면 자기관계.
* 표현: 순서쌍 집합, 표, 방향 그래프.

**성질 (자기관계 ****(R\subseteq X\times X)****)**

* 반사: (\forall x\in X:(x,x)\in R).

* 대칭: (\forall x,y:(x,y)\in R\Rightarrow (y,x)\in R).

* 반대칭: (\forall x\ne y: (x,y),(y,x)\in R\Rightarrow \bot) (혹은 (x=y)).

* 추이: (\forall x,y,z:(x,y),(y,z)\in R\Rightarrow (x,z)\in R).

* 반순서: 반사 ∧ 반대칭 ∧ 추이. 전순서: 모든 쌍 비교 가능.

* 역관계: (R^{-1}={(y,x)\mid (x,y)\in R}).

* 합성: (R_2\circ R_1={(x,z)\mid \exists y:(x,y)\in R_1\land (y,z)\in R_2}).

---

### 3.4 동치 관계

* 동치 관계: 반사 ∧ 대칭 ∧ 추이.
* 동치류: ([a]={x\in X\mid xRa}).
* 분할과의 이중성: 분할이 주어지면 “같은 블록에 속함”으로 동치 관계; 동치 관계가 주어지면 동치류들이 분할 ({[a]\mid a\in X})을 이룬다.
* 예: (X={1,\dots,10})에서 “3이 (x-y)를 나눈다”는 관계는 동치. 동치류는 나머지 0,1,2 클래스.

---

### 3.5 관계의 행렬

* **정의 3.5.1**: (X={x_1,\dots,x_m}, Y={y_1,\dots,y_n}). 관계 (R)의 행렬 (M\in{0,1}^{m\times n}): (M_{ij}=1\iff (x_i,y_j)\in R).

* 자기관계 (n\times n):

  * 반사: 대각 (M_{ii}=1) ((i=1..n)).
  * 대칭: (M=M^\top).
  * 반대칭: (i\ne j\Rightarrow M_{ij}M_{ji}=0).

* 관계 연산 ↔ 행렬 연산(불대수):

  * 합집합: (R_1\cup R_2\leftrightarrow M_1\vee M_2) (원소별 OR).
  * 교집합: (R_1\cap R_2\leftrightarrow M_1\wedge M_2) (원소별 AND).
  * 합성: 부울곱 ((M_1\ ⊙\ M_2)*{ij}=\bigvee_k(M*{1,ik}\wedge M_{2,kj})).

* 추이적 폐포: (M^+=M\vee M^{[2]}\vee\cdots\vee M^{[n]}) (부울 거듭제곱).

  * **워셜 알고리즘**: (W\gets M); for (k=1..n): for (i,j): (W_{ij}\gets W_{ij}\vee(W_{ik}\wedge W_{kj})). 종료 후 (W=M^+).

---

### 3.6 관계형 데이터베이스

* 관계형 모델 용어: 관계(테이블), (n)-짝(행), 속성(열, 정의역 포함), 기본 키.
* 관계 대수 연산:

  * 선택(SELECT): 조건을 만족하는 행 선택.
  * 프로젝션(PROJECT): 특정 속성만 선택(중복 제거).
  * 조인(JOIN): 공통 속성으로 결합. 정의: (R_1\bowtie R_2={\text{일치하는 속성값으로 결합된 튜플}}).

---

## Chapter 4 알고리즘

### 4.1 알고리즘 개요

알고리즘 속성: 입력, 출력, 명확성, 유한성, 유효성. 의사코드로 기술.

* **최댓값 알고리즘**: 길이 (n) 수열 (s)에서 최댓값을 찾는 절차(선형 스캔).

### 4.2 알고리즘 분석 (점근적 표기)

* (f(n)=O(g(n))\iff (\exists C,N>0)(\forall n\ge N)\ |f(n)|\le C|g(n)|).
* (f(n)=\Omega(g(n))\iff (\exists C,N>0)(\forall n\ge N)\ |f(n)|\ge C|g(n)|).
* (f(n)=\Theta(g(n))\iff f(n)=O(g(n))\land f(n)=\Omega(g(n))).

예: (2n^2+5n+3=\Theta(n^2)).

### 4.3 재귀 알고리즘 & 4.4 분석

* 팩토리얼: (n! = n\cdot (n-1)!), (0!=1). 복잡도 (T(n)=T(n-1)+1=\Theta(n)).
* 피보나치: (f_n=f_{n-1}+f_{n-2}) (단순 재귀는 중복계산 큼).
* 이진 탐색: (T(n)=T(n/2)+1=\Theta(\log n)).

### 4.5 정렬 알고리즘

* 버블 정렬: 평균/최악 (\Theta(n^2)).
* 삽입 정렬: 평균/최악 (\Theta(n^2)), 거의 정렬 시 (\Theta(n)) 근접.
* 병합 정렬: 항상 (\Theta(n\log n)).
* 퀵 정렬: 평균 (\Theta(n\log n)), 최악 (\Theta(n^2)).

정렬 예시(병합 과정): 두 정렬 리스트를 포인터 비교로 병합.

---

### 부록: 표기 통일 가이드

* 집합: (\in,\notin,\subseteq,\subset,\cup,\cap,\setminus,\complement).
* 수 체계: (\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{R},\mathbb{C}).
* 논리: (\neg,\wedge,\vee,\to,\leftrightarrow,\forall,\exists).
* 함수: (\operatorname{dom},\operatorname{cod},\operatorname{ran},f^{-1},\circ).
* 관계/행렬: 불연산 (\vee,\wedge), 부울곱 (⊙), 전치 ((\cdot)^\top).
* 점근: (O,\Omega,\Theta).

---

## 부록 A: 표/증명 형식 강화

### A.1 진리표 모음(정규 형태)

**기본 연산**

| p | q | ¬p | p ∧ q | p ∨ q | p → q | p ↔ q |
| - | - | -- | ----- | ----- | ----- | ----- |
| T | T | F  | T     | T     | T     | T     |
| T | F | F  | F     | T     | F     | F     |
| F | T | T  | F     | T     | T     | F     |
| F | F | T  | F     | F     | T     | T     |

**드모르간 검증 열**

| p | q | p ∨ q | ¬(p ∨ q) | ¬p | ¬q | (¬p ∧ ¬q) |
| - | - | ----- | -------- | -- | -- | --------- |
| T | T | T     | F        | F  | F  | F         |
| T | F | T     | F        | F  | T  | F         |
| F | T | T     | F        | T  | F  | F         |
| F | F | F     | T        | T  | T  | T         |

> 관찰: ¬(p ∨ q) 열과 ¬p ∧ ¬q 열이 동일 ⇒ ¬(p∨q) ≡ (¬p∧¬q).

---

### A.2 포함-배제 원리(벤 다이어그램 공식)

세 집합 C, P, S(미적분학/심리학/전산학)에 대해, 적어도 하나를 듣는 학생 수는

|C∪P∪S| = |C| + |P| + |S| − |C∩P| − |C∩S| − |P∩S| + |C∩P∩S|.

본문 예제 수치 대입:

79+83+63 − (33+20+24) + 8 = 225 − 77 + 8 = 156.

총원 165명이므로, 수강하지 않은 학생 수는 165−156 = 9.

---

### A.3 증명 템플릿

**직접 증명 (p → q)**

1. 가정: p. 2) 정의·정리 적용 및 변형. 3) q 도출. ■

**대우 증명 (p → q)**

1. 목표: ¬q → ¬p. 2) 가정: ¬q. 3) 논리 전개. 4) ¬p 결론. ■

**모순법**

1. 가정: p ∧ ¬q. 2) 전개하여 r ∧ ¬r 형태의 모순 도출. 3) 따라서 ¬(p ∧ ¬q), 즉 p → q. ■

---

### A.4 Luhn 알고리즘: 단계별 서식 예

검사 전 15자리: `4 6 9 0 3 5 8 2 1 3 7 5 4 6 5`

1. 짝수 위치(오른쪽부터 한 칸 건너) 두 배 → `8 6 18 0 6 5 16 2 2 3 14 5 8 6 10`

2. 두 자리수는 자리수 합 (18→9, 16→7, 10→1) → `8 6 9 0 6 5 7 2 2 3 5 5 8 6 1`

3. 합 S = 73. 일의 자리 d = 3. 체크디지트 c = (10 − d) mod 10 = 7.

---

### A.5 워셜(Warshall) 알고리즘: 의사코드(0-1 행렬)

```
procedure WARSHALL(M: n×n 0-1 matrix):
    W ← M
    for k ← 1 to n do
        for i ← 1 to n do
            for j ← 1 to n do
                W[i,j] ← W[i,j] OR ( W[i,k] AND W[k,j] )
    return W    // W = M^+ (추이적 폐포)
```

* 올바름 스케치: k를 1..n까지 중간 정점으로 허용하며 길이 ≥2 경로를 점진적으로 반영한다.
* 시간복잡도: Θ(n³), 공간복잡도: Θ(n²).

---

### A.6 정렬 알고리즘 비교표(속성 포함)

| 알고리즘 | 최선         | 평균         | 최악         | 안정성   | 제자리(in-place) |
| ---- | ---------- | ---------- | ---------- | ----- | ------------- |
| 버블   | Θ(n)       | Θ(n²)      | Θ(n²)      | ○     | ○             |
| 삽입   | Θ(n)       | Θ(n²)      | Θ(n²)      | ○     | ○             |
| 병합   | Θ(n log n) | Θ(n log n) | Θ(n log n) | ○     | ×             |
| 퀵    | Θ(n log n) | Θ(n log n) | Θ(n²)      | ×(일반) | ○             |

> 주: 퀵정렬의 안정성은 구현에 따라 다르나 표준 분할은 불안정.

---

### A.7 관계의 행렬: 성질 판정 체크리스트

* 반사성: 모든 i에 대해 M[ii] = 1 ?
* 대칭성: M = Mᵀ ?
* 반대칭성: i ≠ j ⇒ ¬(M[i,j] = 1 ∧ M[j,i] = 1) ?
* 추이성(행렬 기반 빠른 검사): (M ⊙ M) ≤ M ? (부울곱 포함 여부)

---

### A.8 표기 통일(요약 사전)

* 집합: ∈, ∉, ⊆, ⊂, ∪, ∩, , complement.
* 수 체계: ℕ, ℤ, ℚ, ℝ, ℂ.
* 논리: ¬, ∧, ∨, →, ↔, ∀, ∃.
* 함수: dom, cod, ran, f⁻¹, ∘.
* 행렬/그래프: ∨, ∧, ⊙, (·)ᵀ.

---

## 부록 B: 반복문 복잡도 해설 (정확한 횟수 세기)

### B.1 단일/중첩 for-루프

1. 단일 루프

```
for i := 1 to n do    // 실행횟수 n
    body
```

실행 횟수 = Σ_{i=1..n} 1 = n ⇒ Θ(n).

2. 삼각형 합 루프

```
for i := 1 to n do            // i = 1..n
    for j := 1 to i do        // j = 1..i
        body
```

실행 횟수 = Σ_{i=1..n} i = n(n+1)/2 ⇒ Θ(n²).

3. 등차 감소 루프

```
for i := n downto 1 do
    // 상수 시간
```

실행 횟수 = n ⇒ Θ(n).

### B.2 while-루프와 로그 합

1. 이진 나누기 패턴

```
k := n
while k > 1 do
    k := ⌊k/2⌋
```

루프 횟수 = 최소 t such that ⌊n/2^t⌋ ≤ 1 ⇒ t = ⌊log₂ n⌋.
본문 실행 횟수는 ⌊log₂ n⌋회, 조건 검사는 그보다 1회 많음.

2. 증가 배수 패턴

```
i := 1
while i ≤ n do
    i := 2i
```

루프 횟수 = 최대 t such that 2^{t} ≤ n ⇒ t = ⌊log₂ n⌋ + 1.

3. 로그 합 예시
   Σ_{i=1..n} ⌊log₂ i⌋ = Θ(n log n). (구간 분할: i ∈ [2^k, 2^{k+1}−1]에서 항이 k로 일정)

### B.3 루프 불변식과 종료성

이진 탐색(정렬 배열 a[1..n], 탐색값 x)

```
lo := 1; hi := n
while lo ≤ hi do
    mid := ⌊(lo+hi)/2⌋
    if a[mid] = x then return mid
    if a[mid] < x then lo := mid+1 else hi := mid-1
return NOT_FOUND
```

불변식: x가 존재한다면 항상 x ∈ a[lo..hi].
감소량: 구간 길이 L = hi − lo + 1 이 매 반복마다 ⌊L/2⌋로 감소.
횟수 상한: 비교 ≤ ⌊log₂ n⌋ + 1.

---

## 부록 C: Big-O/Ω/Θ 증명 패턴 & 로그 항등식

### C.1 정의로 상수 C, N 잡는 법

• 다항식 상계: f(n) = a n² + b n + c ≤ (|a|+|b|+|c|) n² (n ≥ 1) ⇒ f = O(n²).
• 로그 포함: n log n ≤ n² (n ≥ 2) ⇒ n log n = O(n²); 또한 n log n = Ω(n).

증명 템플릿
O: ∃C,N such that ∀n ≥ N, |f(n)| ≤ C|g(n)|.
Ω: ∃C,N such that ∀n ≥ N, |f(n)| ≥ C|g(n)|.
Θ: O와 Ω를 둘 다 보이면 됨.

### C.2 로그 요약(밑 > 1)

• 밑변환: log_a n = (log_b n) / (log_b a)
• 곱/지수: log(xy) = log x + log y,  log(x^k) = k log x
• 비교: log n = o(n^ε) (모든 ε > 0)

---

## 부록 D: 수학적 귀납법 — 변형과 요령

### D.1 강한 귀납법(피보나치 예)

명제: n ≥ 3 ⇒ F_n ≤ 2^{n−1} (F₁ = F₂ = 1). • 기초: n = 3 ⇒ F₃ = 2 ≤ 2².
• 귀납 가설: 3 ≤ j ≤ k 모두에 대해 F_j ≤ 2^{j−1}.
• 증명: F_{k+1} = F_k + F_{k−1} ≤ 2^{k−1} + 2^{k−2} < 2^{k}.

### D.2 구조적 귀납법(트리 높이)

모든 비공집합 이진트리 T에 대해 노드 수 |T| ≤ 2^{h+1} − 1 (높이 h).
루트의 좌/우 부분트리에 대한 가설을 결합해 증명.

Tip: “기초 → 분해(케이스/구성요소) → 결합” 순으로 서술.

---

## 부록 E: 재귀 해석 툴킷

### E.1 반복 대입법(Iteration)

1. T(n) = T(n/2) + 1  (n은 2의 거듭제곱 가정)
   전개: T(n) = T(1) + log₂ n ⇒ Θ(log n).

2. T(n) = 2T(n/2) + n
   전개: T(n) = 2^k T(n/2^k) + k n,  n/2^k = 1 ⇒ k = log₂ n
   ⇒ T(n) = n T(1) + n log₂ n = Θ(n log n).

### E.2 재귀 트리 요약 규칙

• 레벨 비용 합산: 2T(n/2)+n은 각 레벨 비용이 n, 깊이 log n ⇒ 합 n log n.
• 비균등 분할은 레벨별 상·하경계로 끼워넣기.

### E.3 마스터 정리(간단판)

T(n) = a T(n/b) + f(n),  a ≥ 1, b > 1.

1. f(n) = O(n^{log_b a − ε}) ⇒ T(n) = Θ(n^{log_b a}).
2. f(n) = Θ(n^{log_b a}) ⇒ T(n) = Θ(n^{log_b a} log n).
3. f(n) = Ω(n^{log_b a + ε}) + 정규성 ⇒ T(n) = Θ(f(n)).

---

## 부록 F: 합/곱 표기 실전 팁

• 등차합: Σ_{i=1..n} i = n(n+1)/2
• 등비합: Σ_{i=0..k} r^i = (r^{k+1} − 1)/(r − 1)  (r ≠ 1)
• 로그합: Σ_{i=1..n} log i = Θ(n log n)  (적분 비교로 경계)

---

## 부록 G: 알고리즘 정당성 — 불변식 스케치

• 삽입 정렬: 정렬된 구간 [1..i−1]이 항상 오름차순이며 멀티집합 보존.
• 병합 정렬: 분할은 종료 보장, 병합은 두 정렬 리스트의 최소 선택으로 안정적 결합.
• 퀵 정렬: 평균 Θ(n log n), 최악 Θ(n²); 무작위 피벗·3중 분할로 평균 성능 개선.

---

## 부록 H: 관계/행렬 미세 보강

### H.1 추이성의 행렬 판정(부울곱)

M이 관계 행렬일 때, 추이적이면 항상 (M ⊙ M) ≤ M.
예:
M = [[1,1,0],[0,1,1],[0,0,1]] ⇒ M ⊙ M = [[1,1,1],[0,1,1],[0,0,1]]
(1,3)이 새로 생기므로 원래 M은 추이적이 아님(워셜 적용 시 (1,3) 채워짐).

### H.2 미니 실습 문제

1. M = [[1,0,1],[0,1,0],[0,0,1]]. 반사/대칭/반대칭/추이 여부 판단.
2. M의 추이적 폐포 M⁺을 손으로 구하고, 워셜 단계(k=1..3)를 표로 기록.
