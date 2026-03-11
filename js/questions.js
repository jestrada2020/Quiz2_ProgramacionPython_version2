// questions.js — 50 preguntas de Python con espacios en blanco
// Secciones 1-5: FOR, WHILE, Gauss/Factorial, Fibonacci, Matrices (50 pts)
// Secciones 6-7: Funciones de usuario, import/numpy/math  (+33 pts)
// ── Total: 50 pts (1 pt por pregunta) ───────────────────────────────────

const QUIZ_SECTIONS = [
  { id: 1, name: "Ciclos FOR",          abbrev: "FOR",       color: "#3B82F6" },
  { id: 2, name: "Ciclos WHILE",        abbrev: "WHILE",     color: "#8B5CF6" },
  { id: 3, name: "Gauss y Factorial",   abbrev: "Gauss",     color: "#10B981" },
  { id: 4, name: "Serie Fibonacci",     abbrev: "Fibonacci", color: "#F59E0B" },
  { id: 5, name: "Matrices 2D",         abbrev: "Matrices",  color: "#EF4444" },
  { id: 6, name: "Funciones",           abbrev: "def/if",    color: "#EC4899" },
  { id: 7, name: "import / numpy",      abbrev: "import",    color: "#06B6D4" },
];

const QUIZ_QUESTIONS = [

  // ══════════════════════════════════════════════════════
  // SECCIÓN 1 — Ciclos FOR con condicionales (8 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 1, section: 1, points: 1,
    topic: "Clasificador de rangos con elif",
    question: "Completa el FOR que clasifica números en tres rangos con if/elif/else e imprime la etiqueta:",
    code:
`numeros = [15, 42, 7, 99, 53]
for n in numeros:
    if n [1] 10:
        print(n, "bajo")
    [2] n <= 50:
        print(n, "medio")
    [3]:
        print(n, "[4]")`,
    blanks: [
      { id: 1, options: ["<", ">", "<=", ">="],                  correct: "<" },
      { id: 2, options: ["elif", "else", "if", "while"],         correct: "elif" },
      { id: 3, options: ["else", "finally", "except", "elif"],   correct: "else" },
      { id: 4, options: ["alto", "mayor", "grande", "máximo"],   correct: "alto" },
    ],
  },

  {
    id: 2, section: 1, points: 1,
    topic: "Validación de clave numérica con int() y break",
    question: "Completa el FOR que convierte la clave a int, la valida y corta al acertar:",
    code:
`clave_correcta = [1]("5678")
for _ in [2](3):
    intento = int(input("Ingrese clave numérica: "))
    if intento == clave_correcta:
        print("Acceso permitido")
        [3]
    else:
        print("Clave incorrecta")
[4]:
    print("Cuenta bloqueada")`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "bool"],             correct: "int" },
      { id: 2, options: ["range", "len", "list", "enumerate"],       correct: "range" },
      { id: 3, options: ["break", "continue", "pass", "return"],     correct: "break" },
      { id: 4, options: ["else", "finally", "except", "elif"],       correct: "else" },
    ],
  },

  {
    id: 3, section: 1, points: 1,
    topic: "Calificador con 4 niveles en función",
    question: "Completa la función que recorre notas y asigna letra A, B, C o F con elif:",
    code:
`def calificar(nota):
    if nota [1] 90:
        return "A"
    [2] nota >= 75:
        return "B"
    elif nota >= [3]:
        return "C"
    [4]:
        return "F"

for n in [95, 80, 65, 50]:
    print(calificar(n))`,
    blanks: [
      { id: 1, options: [">=", ">", "<=", "=="],                  correct: ">=" },
      { id: 2, options: ["elif", "else if", "else", "while"],     correct: "elif" },
      { id: 3, options: ["60", "50", "70", "65"],                 correct: "60" },
      { id: 4, options: ["else", "finally", "except", "elif"],    correct: "else" },
    ],
  },

  {
    id: 4, section: 1, points: 1,
    topic: "Acumulador con continue — omitir negativos",
    question: "Completa el FOR que omite negativos con continue y acumula solo los positivos:",
    code:
`valores = [10, -3, 7, -1, 4, -8, 5]
acumulado = [1]
for v in [2]:
    if v [3] 0:
        [4]
    acumulado += v
print("Suma positivos:", acumulado)`,
    blanks: [
      { id: 1, options: ["0", "1", "-1", "None"],                   correct: "0" },
      { id: 2, options: ["valores", "lista", "v", "nums"],          correct: "valores" },
      { id: 3, options: ["<", ">", "<=", ">="],                     correct: "<" },
      { id: 4, options: ["continue", "break", "pass", "return"],    correct: "continue" },
    ],
  },

  {
    id: 5, section: 1, points: 1,
    topic: "Contador de vocales con lower, in y round",
    question: "Completa el FOR que convierte a minúscula, detecta vocal y calcula porcentaje:",
    code:
`texto = input("Ingrese texto: ")
vocales = 0
for letra in texto:
    if letra.[1]() [2] "aeiouáéíóú":
        vocales [3] 1
porcentaje = [4](vocales / len(texto) * 100, 1)
print(f"Vocales: {vocales} ({porcentaje}%)")`,
    blanks: [
      { id: 1, options: ["lower", "upper", "strip", "split"],      correct: "lower" },
      { id: 2, options: ["in", "not in", "==", "is"],              correct: "in" },
      { id: 3, options: ["+=", "-=", "*=", "/="],                  correct: "+=" },
      { id: 4, options: ["round", "int", "float", "abs"],          correct: "round" },
    ],
  },

  {
    id: 6, section: 1, points: 1,
    topic: "FOR anidado — tabla de multiplicar con condición",
    question: "Completa el doble FOR que solo imprime cuando el producto supera 10:",
    code:
`for i in [1](1, 6):
    for j in range(1, [2]):
        producto = i [3] j
        if producto [4] 10:
            print(f"{i} x {j} = {producto}")`,
    blanks: [
      { id: 1, options: ["range", "list", "len", "enumerate"],    correct: "range" },
      { id: 2, options: ["6", "5", "11", "10"],                   correct: "6" },
      { id: 3, options: ["*", "+", "**", "//"],                   correct: "*" },
      { id: 4, options: [">", "<", ">=", "<="],                   correct: ">" },
    ],
  },

  {
    id: 7, section: 1, points: 1,
    topic: "enumerate con float y clasificación de puntajes",
    question: "Completa el FOR con enumerate que convierte puntajes a float y los clasifica con elif:",
    code:
`puntajes = ["8.5", "6.2", "9.0", "4.8", "7.3"]
for i, p in [1](puntajes, [2]=1):
    nota = [3](p)
    if nota >= 7.0:
        estado = "Aprobado"
    [4] nota >= 5.0:
        estado = "Recuperación"
    else:
        estado = "Reprobado"
    print(f"{i}. {nota} — {estado}")`,
    blanks: [
      { id: 1, options: ["enumerate", "zip", "range", "sorted"],   correct: "enumerate" },
      { id: 2, options: ["start", "begin", "init", "offset"],      correct: "start" },
      { id: 3, options: ["float", "int", "str", "round"],          correct: "float" },
      { id: 4, options: ["elif", "else", "if", "while"],           correct: "elif" },
    ],
  },

  {
    id: 8, section: 1, points: 1,
    topic: "zip — precio final con descuento y elif",
    question: "Completa el FOR con zip que calcula precio final y clasifica el nivel de descuento:",
    code:
`productos = ["Laptop", "Mouse", "Monitor", "Teclado"]
precios   = [3200000, 85000, 950000, 180000]
descuentos = [0.15, 0.05, 0.10, 0.08]
for prod, precio, desc in [1](productos, [2], descuentos):
    final = [3](precio * (1 - desc), 2)
    if desc >= 0.10:
        etiqueta = "Oferta especial"
    [4] desc >= 0.07:
        etiqueta = "Descuento normal"
    else:
        etiqueta = "Precio estándar"
    print(f"{prod}: \${final} — {etiqueta}")`,
    blanks: [
      { id: 1, options: ["zip", "enumerate", "range", "map"],          correct: "zip" },
      { id: 2, options: ["precios", "descuentos", "productos", "final"], correct: "precios" },
      { id: 3, options: ["round", "int", "float", "abs"],              correct: "round" },
      { id: 4, options: ["elif", "else", "if", "while"],               correct: "elif" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 2 — Ciclos WHILE (6 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 9, section: 2, points: 1,
    topic: "WHILE — FizzBuzz con múltiplos de 3 y 5",
    question: "Completa el WHILE que imprime FizzBuzz, Fizz, Buzz o el número según corresponda:",
    code:
`numero = [1]
while numero <= 30:
    if numero [2] 3 == 0 and numero % 5 == 0:
        print(numero, "FizzBuzz")
    elif numero % 3 == [3]:
        print(numero, "Fizz")
    elif numero % 5 == 0:
        print(numero, "Buzz")
    numero [4] 1`,
    blanks: [
      { id: 1, options: ["1", "0", "3", "5"],                   correct: "1" },
      { id: 2, options: ["%", "//", "**", "+"],                  correct: "%" },
      { id: 3, options: ["0", "1", "3", "-1"],                   correct: "0" },
      { id: 4, options: ["+=", "-=", "*=", "/="],                correct: "+=" },
    ],
  },

  {
    id: 10, section: 2, points: 1,
    topic: "Adivina el número con int(input()) y elif",
    question: "Completa el WHILE que lee intentos con int(input()), lleva conteo y usa elif:",
    code:
`numero_secreto = [1](input("Define el número secreto: "))
intentos = 0
while [2]:
    intento = int(input(f"Intento {intentos+1}: "))
    intentos [3] 1
    if intento == numero_secreto:
        print(f"¡Correcto en {intentos} intentos!")
        break
    [4] intento < numero_secreto:
        print("Muy bajo")
    else:
        print("Muy alto")`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "input"],             correct: "int" },
      { id: 2, options: ["True", "False", "1 == 1", "None"],          correct: "True" },
      { id: 3, options: ["+=", "-=", "*=", "/="],                     correct: "+=" },
      { id: 4, options: ["elif", "else", "if", "while"],              correct: "elif" },
    ],
  },

  {
    id: 11, section: 2, points: 1,
    topic: "WHILE — descuento progresivo con float y elif",
    question: "Completa el WHILE que lee precio con float(input), aplica 10% de descuento y lo clasifica:",
    code:
`precio = [1](input("Precio inicial: "))
while precio > 100.0:
    precio [2] 0.90
    if precio > 180.0:
        categoria = "Premium"
    [3] precio > 140.0:
        categoria = "Medio"
    [4]:
        categoria = "Económico"
    print(f"\${precio:.2f} — {categoria}")`,
    blanks: [
      { id: 1, options: ["float", "int", "str", "round"],             correct: "float" },
      { id: 2, options: ["*=", "+=", "-=", "/="],                     correct: "*=" },
      { id: 3, options: ["elif", "else", "if", "while"],              correct: "elif" },
      { id: 4, options: ["else", "finally", "except", "elif"],        correct: "else" },
    ],
  },

  {
    id: 12, section: 2, points: 1,
    topic: "WHILE con pop() — gestor de tareas con prioridad",
    question: "Completa el WHILE que extrae tareas con pop, detecta urgentes con 'in' y las cuenta:",
    code:
`tareas = ["estudiar", "llamar", "comprar", "estudiar_examen"]
urgentes = 0
while [1](tareas) > 0:
    tarea = tareas.[2](0)
    if "estudiar" [3] tarea:
        urgentes [4] 1
        print(f"URGENTE: {tarea}")
    else:
        print(f"Normal: {tarea}")
print(f"Urgentes procesadas: {urgentes}")`,
    blanks: [
      { id: 1, options: ["len", "size", "count", "range"],            correct: "len" },
      { id: 2, options: ["pop", "remove", "append", "insert"],        correct: "pop" },
      { id: 3, options: ["in", "not in", "==", "is"],                 correct: "in" },
      { id: 4, options: ["+=", "-=", "*=", "/="],                     correct: "+=" },
    ],
  },

  {
    id: 13, section: 2, points: 1,
    topic: "Menú interactivo con int(input()) y elif",
    question: "Completa el menú WHILE que convierte la opción a int y usa if/elif/else:",
    code:
`opcion = 0
while opcion [1] 4:
    opcion = [2]([3]("1-Listar  2-Agregar  3-Eliminar  4-Salir\\n> "))
    if opcion == 1:
        print("Listando...")
    [4] opcion == 2:
        print("Agregando...")
    elif opcion == 3:
        print("Eliminando...")`,
    blanks: [
      { id: 1, options: ["!=", "==", ">=", "<="],              correct: "!=" },
      { id: 2, options: ["int", "float", "str", "bool"],       correct: "int" },
      { id: 3, options: ["input", "print", "str", "range"],    correct: "input" },
      { id: 4, options: ["elif", "else", "if", "while"],       correct: "elif" },
    ],
  },

  {
    id: 14, section: 2, points: 1,
    topic: "WHILE con índice — inventario con stock bajo y cero",
    question: "Completa el WHILE que recorre el inventario y clasifica ítems en sin_stock y stock_bajo:",
    code:
`stock = [5, 0, 2, 0, 8, 1, 0]
i = [1]
sin_stock = 0
stock_bajo = 0
while i < len(stock):
    if stock[i] [2] 0:
        sin_stock += 1
    [3] stock[i] [4] 3:
        stock_bajo += 1
    i += 1
print(f"Sin stock: {sin_stock}, Stock bajo: {stock_bajo}")`,
    blanks: [
      { id: 1, options: ["0", "1", "-1", "len(stock)"],            correct: "0" },
      { id: 2, options: ["==", "!=", ">", "<"],                    correct: "==" },
      { id: 3, options: ["elif", "else", "if", "while"],           correct: "elif" },
      { id: 4, options: ["<=", "<", ">=", ">"],                    correct: "<=" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 3 — Suma de Gauss y Factorial (6 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 15, section: 3, points: 1,
    topic: "Suma de Gauss — FOR con int(input) y verificación",
    question: "Completa el FOR que lee n con int(input), acumula y verifica con la fórmula de Gauss:",
    code:
`n = [1](input("n: "))
suma = 0
for i in range(1, [2] + 1):
    suma [3] i
formula = n * (n + 1) [4] 2
print(f"FOR={suma}, Gauss={formula}, Dif={abs(suma-formula)}")`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "input"],            correct: "int" },
      { id: 2, options: ["n", "i", "suma", "100"],                   correct: "n" },
      { id: 3, options: ["+=", "-=", "*=", "/="],                    correct: "+=" },
      { id: 4, options: ["//", "/", "*", "%"],                       correct: "//" },
    ],
  },

  {
    id: 16, section: 3, points: 1,
    topic: "Gauss — expresión como string con str() y condición",
    question: "Completa el FOR que construye la expresión de Gauss convirtiendo cada término con str():",
    code:
`n = [1](input("n: "))
suma_gauss = 0
expresion = ""
for i in [2](1, n + 1):
    suma_gauss [3] i
    if i < n:
        expresion += [4](i) + " + "
    else:
        expresion += str(i) + " = " + str(suma_gauss)
print(expresion)`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "input"],            correct: "int" },
      { id: 2, options: ["range", "list", "len", "enumerate"],       correct: "range" },
      { id: 3, options: ["+=", "-=", "*=", "/="],                    correct: "+=" },
      { id: 4, options: ["str", "int", "float", "repr"],             correct: "str" },
    ],
  },

  {
    id: 17, section: 3, points: 1,
    topic: "Gauss WHILE — suma de pares e impares por separado",
    question: "Completa el WHILE que separa la acumulación de pares e impares hasta n:",
    code:
`n = int(input("n: "))
i = [1]
suma_pares = 0
suma_impares = 0
while i [2] n:
    if i % 2 [3] 0:
        suma_pares += i
    [4]:
        suma_impares += i
    i += 1
print(f"Pares={suma_pares}, Impares={suma_impares}")`,
    blanks: [
      { id: 1, options: ["1", "0", "2", "-1"],                  correct: "1" },
      { id: 2, options: ["<=", "<", ">=", ">"],                  correct: "<=" },
      { id: 3, options: ["==", "!=", ">", "<"],                  correct: "==" },
      { id: 4, options: ["else", "elif", "finally", "except"],   correct: "else" },
    ],
  },

  {
    id: 18, section: 3, points: 1,
    topic: "Factorial — FOR descendente con caso base y print",
    question: "Completa el FOR descendente que detecta el caso base n==0 e imprime el resultado:",
    code:
`n = int(input("n: "))
if n [1] 0:
    factorial_resultado = 1
    print(f"0! = 1 (caso base)")
else:
    factorial_resultado = [2]
    for i in range(n, 0, [3]):
        factorial_resultado [4] i
    print(f"{n}! = {factorial_resultado}")`,
    blanks: [
      { id: 1, options: ["==", "!=", ">=", "<="],               correct: "==" },
      { id: 2, options: ["1", "0", "n", "-1"],                  correct: "1" },
      { id: 3, options: ["-1", "1", "-2", "0"],                 correct: "-1" },
      { id: 4, options: ["*=", "+=", "-=", "/="],               correct: "*=" },
    ],
  },

  {
    id: 19, section: 3, points: 1,
    topic: "Factorial — FOR ascendente con float y división",
    question: "Completa el FOR ascendente que calcula el factorial y lo convierte a float para dividir:",
    code:
`n = [1](input("n: "))
factorial = 1
for i in [2](1, n + 1):
    factorial [3] i
resultado = [4](factorial) / (n + 1)
print(f"{n}! = {factorial}, {n}!/(n+1) = {resultado:.4f}")`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "input"],            correct: "int" },
      { id: 2, options: ["range", "list", "len", "enumerate"],       correct: "range" },
      { id: 3, options: ["*=", "+=", "-=", "/="],                    correct: "*=" },
      { id: 4, options: ["float", "int", "str", "round"],            correct: "float" },
    ],
  },

  {
    id: 20, section: 3, points: 1,
    topic: "Factorial — expresión con str() y paridad del resultado",
    question: "Completa el FOR que construye la expresión del factorial y determina si el resultado es par:",
    code:
`n = int(input("n: "))
factorial = 1
expresion_matematica = ""
for i in [1](1, n + 1):
    factorial [2] i
    if i > 1:
        expresion_matematica = expresion_matematica + " x " + [3](i)
    else:
        expresion_matematica = [3](i)
if factorial [4] 2 == 0:
    paridad = "par"
else:
    paridad = "impar"
print(f"{expresion_matematica} = {factorial} ({paridad})")`,
    blanks: [
      { id: 1, options: ["range", "list", "len", "enumerate"],       correct: "range" },
      { id: 2, options: ["*=", "+=", "-=", "/="],                    correct: "*=" },
      { id: 3, options: ["str", "int", "float", "repr"],             correct: "str" },
      { id: 4, options: ["%", "//", "**", "+"],                      correct: "%" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 4 — Serie de Fibonacci (4 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 21, section: 4, points: 1,
    topic: "Fibonacci — FOR con lista y clasificación par/impar",
    question: "Completa el FOR que genera Fibonacci e imprime si cada término es par o impar con elif:",
    code:
`n = int(input("Términos: "))
fib = [[1], 1]
for _ in range(n - [2]):
    fib.append(fib[-1] + fib[-2])
for i, val in enumerate(fib):
    if val [3] 2 == 0:
        print(f"fib[{i}]={val} par")
    [4]:
        print(f"fib[{i}]={val} impar")`,
    blanks: [
      { id: 1, options: ["0", "1", "-1", "None"],                    correct: "0" },
      { id: 2, options: ["2", "1", "0", "3"],                        correct: "2" },
      { id: 3, options: ["%", "//", "**", "+"],                      correct: "%" },
      { id: 4, options: ["else", "elif", "finally", "except"],       correct: "else" },
    ],
  },

  {
    id: 22, section: 4, points: 1,
    topic: "Fibonacci — FOR con break e índice de cruce",
    question: "Completa el FOR que genera Fibonacci, para al superar 200 e imprime el índice:",
    code:
`fib = [0, 1]
for i in range([1]):
    nuevo = fib[i] + fib[i [2] 1]
    fib.[3](nuevo)
    if nuevo [4] 200:
        print(f"Superó 200 en índice {len(fib)-1}: {nuevo}")
        break
print(f"Secuencia: {fib}")`,
    blanks: [
      { id: 1, options: ["30", "10", "5", "20"],                     correct: "30" },
      { id: 2, options: ["+", "-", "*", "/"],                        correct: "+" },
      { id: 3, options: ["append", "insert", "add", "push"],         correct: "append" },
      { id: 4, options: [">", "<", ">=", "<="],                      correct: ">" },
    ],
  },

  {
    id: 23, section: 4, points: 1,
    topic: "Fibonacci — WHILE con int(input) y límite de términos",
    question: "Completa el WHILE que lee n con int(input) y genera exactamente n términos:",
    code:
`n = [1]([2]("¿Cuántos términos? "))
fib = [0, 1]
contador = [3]
while contador <= n:
    siguiente = fib[-1] + fib[-2]
    fib.append(siguiente)
    contador [4] 1
print(f"Fibonacci ({n} términos): {fib[:n]}")`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "input"],            correct: "int" },
      { id: 2, options: ["input", "print", "str", "range"],          correct: "input" },
      { id: 3, options: ["2", "1", "0", "3"],                        correct: "2" },
      { id: 4, options: ["+=", "-=", "*=", "/="],                    correct: "+=" },
    ],
  },

  {
    id: 24, section: 4, points: 1,
    topic: "Fibonacci — WHILE con int(input) y clasificación por tamaño",
    question: "Completa el WHILE que acumula Fibonacci ≤ límite y clasifica la serie como larga o corta:",
    code:
`limite = [1](input("Límite: "))
a, b = 0, 1
secuencia = []
while b [2] limite:
    secuencia.[3](b)
    a, b = b, a + b
if len(secuencia) [4] 5:
    print(f"Serie larga ({len(secuencia)} términos): {secuencia}")
else:
    print(f"Serie corta ({len(secuencia)} términos): {secuencia}")`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "input"],            correct: "int" },
      { id: 2, options: ["<=", "<", ">=", ">"],                      correct: "<=" },
      { id: 3, options: ["append", "insert", "add", "push"],         correct: "append" },
      { id: 4, options: [">", "<", ">=", "<="],                      correct: ">" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 5 — Matrices Bidimensionales (6 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 25, section: 5, points: 1,
    topic: "Matriz FOR — imprimir con marcador si elemento > 5",
    question: "Completa el doble FOR que imprime cada elemento con asterisco si supera 5:",
    code:
`matriz = [[1, 6, 3], [8, 2, 7], [4, 9, 5]]
for [1] in matriz:
    for elemento in [1]:
        if elemento [2] 5:
            print(f"{elemento}*", [3]=" ")
        [4]:
            print(elemento, end=" ")
    print()`,
    blanks: [
      { id: 1, options: ["fila", "row", "lista", "item"],            correct: "fila" },
      { id: 2, options: [">", "<", ">=", "<="],                      correct: ">" },
      { id: 3, options: ["end", "sep", "file", "flush"],             correct: "end" },
      { id: 4, options: ["else", "elif", "finally", "except"],       correct: "else" },
    ],
  },

  {
    id: 26, section: 5, points: 1,
    topic: "Matriz FOR — suma de la diagonal principal con int()",
    question: "Completa el FOR por índice que suma solo los elementos de la diagonal principal:",
    code:
`matriz = [[3, 1, 4], [1, 5, 9], [2, 6, 5]]
diagonal = 0
for i in [1]([2](matriz)):
    diagonal [3] matriz[i][i]
traza = [4](diagonal)
print(f"Diagonal principal: {traza}")`,
    blanks: [
      { id: 1, options: ["range", "list", "enumerate", "zip"],       correct: "range" },
      { id: 2, options: ["len", "size", "count", "max"],             correct: "len" },
      { id: 3, options: ["+=", "-=", "*=", "/="],                    correct: "+=" },
      { id: 4, options: ["int", "float", "str", "round"],            correct: "int" },
    ],
  },

  {
    id: 27, section: 5, points: 1,
    topic: "Matriz FOR — elevar al cuadrado solo los impares",
    question: "Completa el doble FOR que eleva al cuadrado únicamente los elementos impares:",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for i in [1](len(matriz)):
    for j in range(len(matriz[[2]])):
        if matriz[i][j] [3] 2 != 0:
            matriz[i][j] [4] 2
print(matriz)`,
    blanks: [
      { id: 1, options: ["range", "list", "len", "zip"],             correct: "range" },
      { id: 2, options: ["i", "j", "0", "k"],                       correct: "i" },
      { id: 3, options: ["%", "//", "**", "+"],                      correct: "%" },
      { id: 4, options: ["**=", "*=", "+=", "-="],                   correct: "**=" },
    ],
  },

  {
    id: 28, section: 5, points: 1,
    topic: "Matriz WHILE — suma de cada fila con acumulador",
    question: "Completa el doble WHILE que calcula la suma de cada fila de la matriz:",
    code:
`matriz = [[3, 7, 2], [8, 1, 5], [4, 6, 9]]
i = [1]
while i < [2](matriz):
    j = 0
    suma_fila = 0
    while j < len(matriz[i]):
        suma_fila [3] matriz[i][j]
        j += 1
    print(f"Fila {i}: suma = {[4](suma_fila)}")
    i += 1`,
    blanks: [
      { id: 1, options: ["0", "1", "-1", "None"],                    correct: "0" },
      { id: 2, options: ["len", "size", "count", "range"],           correct: "len" },
      { id: 3, options: ["+=", "-=", "*=", "/="],                    correct: "+=" },
      { id: 4, options: ["int", "float", "str", "round"],            correct: "int" },
    ],
  },

  {
    id: 29, section: 5, points: 1,
    topic: "Matriz WHILE — búsqueda con int(input) y reporte de posición",
    question: "Completa el doble WHILE que lee un valor con int(input), lo busca e imprime su posición:",
    code:
`matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
valor_buscado = [1](input("Buscar: "))
encontrado = [2]
i = 0
while i < len(matriz) and not encontrado:
    j = 0
    while j < len(matriz[i]):
        if matriz[i][j] [3] valor_buscado:
            encontrado = True
            print(f"Encontrado en [{i}][{j}]")
            [4]
        j += 1
    i += 1
if not encontrado:
    print("No encontrado")`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "input"],            correct: "int" },
      { id: 2, options: ["False", "True", "None", "0"],              correct: "False" },
      { id: 3, options: ["==", "!=", ">", "<"],                      correct: "==" },
      { id: 4, options: ["break", "continue", "pass", "return"],     correct: "break" },
    ],
  },

  {
    id: 30, section: 5, points: 1,
    topic: "Crear matriz con FOR — lectura con float(input())",
    question: "Completa el doble FOR que crea una matriz leyendo cada elemento con float(input()):",
    code:
`filas = [1](input("Filas: "))
columnas = int(input("Columnas: "))
matriz = []
for i in [2](filas):
    fila = []
    for j in range(columnas):
        val = [3]([4](f"[{i}][{j}]: "))
        fila.append(val)
    matriz.append(fila)
print(matriz)`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "range"],            correct: "int" },
      { id: 2, options: ["range", "list", "len", "enumerate"],       correct: "range" },
      { id: 3, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 4, options: ["input", "print", "str", "range"],          correct: "input" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 6 — Funciones de usuario (10 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 31, section: 6, points: 1,
    topic: "def — área y perímetro con float() desde strings",
    question: "Completa la función que convierte base y altura a float y retorna área y perímetro:",
    code:
`[1] calcular_rectangulo(base_str, altura_str):
    base   = [2](base_str)
    altura = [2](altura_str)
    area   = base [3] altura
    perimetro = 2 * (base + altura)
    [4] area, perimetro

a, p = calcular_rectangulo("5.5", "3.2")
print(f"Área={a:.2f}, Perímetro={p:.2f}")`,
    blanks: [
      { id: 1, options: ["def", "function", "fun", "lambda"],        correct: "def" },
      { id: 2, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 3, options: ["*", "+", "-", "/"],                        correct: "*" },
      { id: 4, options: ["return", "print", "yield", "pass"],        correct: "return" },
    ],
  },

  {
    id: 32, section: 6, points: 1,
    topic: "def con parámetro por defecto — interés compuesto",
    question: "Completa la función de interés compuesto con tasa por defecto de 5% y float():",
    code:
`def interes_compuesto(capital_str, años, [1]=0.05):
    capital = [2](capital_str)
    monto = capital * (1 + [1]) [3] años
    ganancia = monto - capital
    [4] round(monto, 2), round(ganancia, 2)

m, g = interes_compuesto("1000", 3)
print(f"Monto={m}, Ganancia={g}")`,
    blanks: [
      { id: 1, options: ["tasa", "rate", "interes", "t"],            correct: "tasa" },
      { id: 2, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 3, options: ["**", "*", "+", "//"],                      correct: "**" },
      { id: 4, options: ["return", "print", "yield", "pass"],        correct: "return" },
    ],
  },

  {
    id: 33, section: 6, points: 1,
    topic: "Función por tramos — multa por exceso de velocidad",
    question: "Completa la función que calcula la multa multiplicando el exceso por un valor fijo:",
    code:
`def calcular_multa(velocidad, limite):
    if velocidad [1] limite:
        exceso = velocidad - limite
        multa = exceso [2] 15000
        [3] multa
    [4]:
        return 0

print(calcular_multa(85, 60))
print(calcular_multa(50, 60))`,
    blanks: [
      { id: 1, options: [">", "<", ">=", "=="],                      correct: ">" },
      { id: 2, options: ["*", "+", "**", "/"],                       correct: "*" },
      { id: 3, options: ["return", "print", "yield", "pass"],        correct: "return" },
      { id: 4, options: ["else", "elif", "finally", "except"],       correct: "else" },
    ],
  },

  {
    id: 34, section: 6, points: 1,
    topic: "Función por tramos — tarifa de taxi con 3 zonas",
    question: "Completa la función que calcula la tarifa de taxi según la distancia con 3 tramos:",
    code:
`def tarifa_taxi(km):
    if km [1] 3:
        return 5000
    [2] km <= 10:
        return 5000 + (km - 3) [3] 1200
    [4]:
        return 5000 + 8400 + (km - 10) * 900

for d in [1, 5, 15]:
    print(f"{d} km → \${tarifa_taxi(d)}")`,
    blanks: [
      { id: 1, options: ["<=", "<", ">=", "=="],                     correct: "<=" },
      { id: 2, options: ["elif", "else if", "else", "while"],        correct: "elif" },
      { id: 3, options: ["*", "+", "**", "/"],                       correct: "*" },
      { id: 4, options: ["else", "finally", "except", "elif"],       correct: "else" },
    ],
  },

  {
    id: 35, section: 6, points: 1,
    topic: "Función por tramos — 4 rangos de IMC con float()",
    question: "Completa la función que convierte peso y talla a float y clasifica el IMC en 4 categorías:",
    code:
`def clasificar_imc(peso_str, talla_str):
    imc = [1](peso_str) / float(talla_str) ** 2
    if imc < 18.5:
        return "Bajo peso"
    [2] imc < 25.0:
        return "[3]"
    elif imc < 30.0:
        return "Sobrepeso"
    [4]:
        return "Obesidad"

print(clasificar_imc("70", "1.75"))`,
    blanks: [
      { id: 1, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 2, options: ["elif", "else", "if", "while"],             correct: "elif" },
      { id: 3, options: ["Normal", "Saludable", "Ideal", "Óptimo"],  correct: "Normal" },
      { id: 4, options: ["else", "finally", "except", "elif"],       correct: "else" },
    ],
  },

  {
    id: 36, section: 6, points: 1,
    topic: "def con int() — descuento por rango de edad",
    question: "Completa la función que convierte edad a int y aplica descuento según tres rangos de edad:",
    code:
`def descuento_edad(edad_str):
    edad = [1](edad_str)
    if edad [2] 12:
        return 0.50
    [3] edad <= 25:
        return 0.20
    [4] edad >= 65:
        return 0.30
    else:
        return 0.0

for e in ["8", "18", "70", "40"]:
    print(f"Edad {e}: {descuento_edad(e)*100:.0f}% descuento")`,
    blanks: [
      { id: 1, options: ["int", "float", "str", "bool"],             correct: "int" },
      { id: 2, options: ["<=", "<", ">=", "=="],                     correct: "<=" },
      { id: 3, options: ["elif", "else", "if", "while"],             correct: "elif" },
      { id: 4, options: ["elif", "else", "if", "while"],             correct: "elif" },
    ],
  },

  {
    id: 37, section: 6, points: 1,
    topic: "def con float() — conversor de temperatura con estado",
    question: "Completa la función que convierte Celsius a Fahrenheit y Kelvin y clasifica el estado:",
    code:
`def convertir_temp(celsius_str):
    celsius = [1](celsius_str)
    fahrenheit = celsius [2] 9 / 5 + 32
    kelvin = celsius [3] 273.15
    if celsius [4] 0:
        estado = "bajo cero"
    elif celsius == 0:
        estado = "punto de congelación"
    else:
        estado = "sobre cero"
    return round(fahrenheit, 2), round(kelvin, 2), estado

f, k, e = convertir_temp("25")
print(f"F={f}, K={k}, Estado={e}")`,
    blanks: [
      { id: 1, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 2, options: ["*", "+", "**", "/"],                       correct: "*" },
      { id: 3, options: ["+", "-", "*", "/"],                        correct: "+" },
      { id: 4, options: ["<", ">", "<=", ">="],                      correct: "<" },
    ],
  },

  {
    id: 38, section: 6, points: 1,
    topic: "def con for + if — filtrar y devolver cuadrados",
    question: "Completa la función que filtra números mayores que umbral y devuelve sus cuadrados:",
    code:
`def cuadrados_mayores(lista, [1]):
    resultado = []
    for num in [2]:
        if num [3] umbral:
            resultado.[4](num ** 2)
    return resultado

print(cuadrados_mayores([2, 7, 1, 9, 4, 6], 5))`,
    blanks: [
      { id: 1, options: ["umbral", "minimo", "limite", "base"],      correct: "umbral" },
      { id: 2, options: ["lista", "resultado", "arr", "nums"],       correct: "lista" },
      { id: 3, options: [">", "<", ">=", "!="],                      correct: ">" },
      { id: 4, options: ["append", "insert", "add", "push"],         correct: "append" },
    ],
  },

  {
    id: 39, section: 6, points: 1,
    topic: "def con for + elif — contar notas por categorías",
    question: "Completa la función que cuenta notas en tres categorías: altas, medias y bajas:",
    code:
`def clasificar_notas([1], corte_alto=8.0, corte_medio=6.0):
    altas = medias = bajas = 0
    for nota in [1]:
        if nota [2] corte_alto:
            altas += 1
        [3] nota >= corte_medio:
            medias += 1
        [4]:
            bajas += 1
    return altas, medias, bajas

a, m, b = clasificar_notas([9, 7, 5, 8, 4, 9, 6])
print(f"Altas={a}, Medias={m}, Bajas={b}")`,
    blanks: [
      { id: 1, options: ["notas", "lista", "arr", "datos"],          correct: "notas" },
      { id: 2, options: [">=", ">", "<=", "!="],                     correct: ">=" },
      { id: 3, options: ["elif", "else", "if", "while"],             correct: "elif" },
      { id: 4, options: ["else", "finally", "except", "elif"],       correct: "else" },
    ],
  },

  {
    id: 40, section: 6, points: 1,
    topic: "def con for — promedio de valores en rango con float",
    question: "Completa la función que acumula solo valores entre min_val y max_val y retorna su promedio:",
    code:
`def promedio_rango(datos, min_val, max_val):
    total = 0.0
    contador = 0
    for x in datos:
        if x >= min_val [1] x <= max_val:
            total [2] x
            contador += 1
    if contador [3] 0:
        return [4](total / contador, 2)
    return 0.0

print(promedio_rango([3, 15, 7, 22, 9, 1, 18], 5, 20))`,
    blanks: [
      { id: 1, options: ["and", "or", "not", "in"],                  correct: "and" },
      { id: 2, options: ["+=", "-=", "*=", "/="],                    correct: "+=" },
      { id: 3, options: [">", "<", ">=", "=="],                      correct: ">" },
      { id: 4, options: ["round", "int", "float", "abs"],            correct: "round" },
    ],
  },

  // ══════════════════════════════════════════════════════
  // SECCIÓN 7 — import / numpy / math (10 pts)
  // ══════════════════════════════════════════════════════

  {
    id: 41, section: 7, points: 1,
    topic: "import math — volumen de esfera con pi y float()",
    question: "Completa la función que convierte el radio a float y calcula el volumen de la esfera:",
    code:
`import math

def volumen_esfera(radio_str):
    r = [1](radio_str)
    vol = (4/3) * math.[2] * r [3] 3
    return [4](vol, 4)

for r in ["1", "2.5", "5"]:
    print(f"r={r} → V={volumen_esfera(r)}")`,
    blanks: [
      { id: 1, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 2, options: ["pi", "e", "tau", "sqrt"],                  correct: "pi" },
      { id: 3, options: ["**", "*", "+", "//"],                      correct: "**" },
      { id: 4, options: ["round", "int", "float", "abs"],            correct: "round" },
    ],
  },

  {
    id: 42, section: 7, points: 1,
    topic: "from math import — seno, coseno y cuadrante",
    question: "Completa la importación y la función que calcula seno/coseno y determina el cuadrante:",
    code:
`from [1] import sin, cos, pi

def analizar_angulo(grados_str):
    grados = [2](grados_str)
    rad = grados * pi / 180
    seno = [3](rad)
    coseno = cos(rad)
    if seno > 0 [4] coseno > 0:
        cuadrante = 1
    elif seno > 0:
        cuadrante = 2
    else:
        cuadrante = 3
    return round(seno, 4), round(coseno, 4), cuadrante

s, c, q = analizar_angulo("45")
print(f"sen={s}, cos={c}, cuadrante={q}")`,
    blanks: [
      { id: 1, options: ["math", "numpy", "os", "sys"],              correct: "math" },
      { id: 2, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 3, options: ["sin", "cos", "tan", "sqrt"],               correct: "sin" },
      { id: 4, options: ["and", "or", "not", "in"],                  correct: "and" },
    ],
  },

  {
    id: 43, section: 7, points: 1,
    topic: "math en funciones propias — área de anillo",
    question: "Completa las funciones que usan math.pi y math.sqrt para calcular área de anillo e hipotenusa:",
    code:
`import math

def area_anillo(r_ext_str, r_int_str):
    r_ext = [1](r_ext_str)
    r_int = float(r_int_str)
    if r_int [2] r_ext:
        return -1
    area = math.[3] * (r_ext [4] 2 - r_int ** 2)
    return round(area, 2)

def hipotenusa(a, b):
    return math.sqrt(a**2 + b**2)

print(area_anillo("5", "3"))
print(hipotenusa(3, 4))`,
    blanks: [
      { id: 1, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 2, options: [">=", ">", "<=", "=="],                     correct: ">=" },
      { id: 3, options: ["pi", "e", "tau", "sqrt"],                  correct: "pi" },
      { id: 4, options: ["**", "*", "+", "//"],                      correct: "**" },
    ],
  },

  {
    id: 44, section: 7, points: 1,
    topic: "import numpy — filtrar positivos de un array con for e if",
    question: "Completa la función que crea un array numpy y extrae los positivos con for/if:",
    code:
`import numpy [1] np

def filtrar_positivos(lista):
    arr = np.[2](lista)
    positivos = []
    for x in arr:
        if x [3] 0:
            positivos.[4](float(x))
    return positivos

datos = [-3, 5, -1, 8, 0, 2]
print(filtrar_positivos(datos))`,
    blanks: [
      { id: 1, options: ["as", "import", "from", "="],               correct: "as" },
      { id: 2, options: ["array", "zeros", "ones", "linspace"],      correct: "array" },
      { id: 3, options: [">", "<", ">=", "!="],                      correct: ">" },
      { id: 4, options: ["append", "insert", "add", "push"],         correct: "append" },
    ],
  },

  {
    id: 45, section: 7, points: 1,
    topic: "def con float(input()) — clasificar temperatura corporal",
    question: "Completa la función que convierte la temperatura a float y la clasifica con elif:",
    code:
`def clasificar_temperatura(temp_str):
    temp = [1](temp_str)
    if temp [2] 40:
        estado = "Fiebre alta"
    [3] temp >= 38:
        estado = "Fiebre"
    elif temp >= 36:
        estado = "Normal"
    [4]:
        estado = "Hipotermia"
    return estado

for t in ["36.5", "38.5", "40.5", "34"]:
    print(f"{t}°C — {clasificar_temperatura(t)}")`,
    blanks: [
      { id: 1, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 2, options: [">=", ">", "<=", "=="],                     correct: ">=" },
      { id: 3, options: ["elif", "else if", "else", "while"],        correct: "elif" },
      { id: 4, options: ["else", "finally", "except", "elif"],       correct: "else" },
    ],
  },

  {
    id: 46, section: 7, points: 1,
    topic: "numpy — recorrer array con enumerate, int() y elif",
    question: "Completa la función que recorre un array con enumerate, convierte a int y clasifica con elif:",
    code:
`import numpy as np

def analizar_array(lista):
    arr = np.[1](lista)
    for i, x in [2](arr):
        valor = [3](x)
        if valor > 10:
            print(f"arr[{i}]={valor}: grande")
        [4] valor > 0:
            print(f"arr[{i}]={valor}: positivo")
        else:
            print(f"arr[{i}]={valor}: no positivo")

analizar_array([-2, 0, 5, 15, -8, 3])`,
    blanks: [
      { id: 1, options: ["array", "zeros", "ones", "linspace"],      correct: "array" },
      { id: 2, options: ["enumerate", "zip", "range", "sorted"],     correct: "enumerate" },
      { id: 3, options: ["int", "float", "str", "round"],            correct: "int" },
      { id: 4, options: ["elif", "else", "if", "while"],             correct: "elif" },
    ],
  },

  {
    id: 47, section: 7, points: 1,
    topic: "math — ceil y floor en función con modo por defecto",
    question: "Completa la función que usa ceil o floor según el parámetro 'modo' con elif:",
    code:
`import math

def redondear_precio(precio_str, [1]="arriba"):
    precio = [2](precio_str)
    if modo == "arriba":
        return math.[3](precio)
    [4] modo == "abajo":
        return math.floor(precio)
    else:
        return round(precio)

print(redondear_precio("3.2", "arriba"))
print(redondear_precio("3.8", "abajo"))
print(redondear_precio("3.5"))`,
    blanks: [
      { id: 1, options: ["modo", "tipo", "opcion", "dir"],           correct: "modo" },
      { id: 2, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 3, options: ["ceil", "floor", "round", "trunc"],         correct: "ceil" },
      { id: 4, options: ["elif", "else", "if", "while"],             correct: "elif" },
    ],
  },

  {
    id: 48, section: 7, points: 1,
    topic: "math — sin, cos y pi en función con float(input())",
    question: "Completa la función que lee grados con float(input()), calcula seno/coseno y determina el cuadrante:",
    code:
`import math

def convertir_y_calcular(grados_str):
    grados = [1](grados_str)
    rad = grados [2] math.pi / 180
    seno   = round(math.[3](rad), 4)
    coseno = round(math.cos(rad), 4)
    if seno > 0 [4] coseno > 0:
        cuadrante = 1
    elif seno > 0:
        cuadrante = 2
    else:
        cuadrante = 3
    return seno, coseno, cuadrante

s, c, q = convertir_y_calcular(input("Grados: "))
print(f"sen={s}, cos={c}, cuadrante={q}")`,
    blanks: [
      { id: 1, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 2, options: ["*", "/", "+", "**"],                       correct: "*" },
      { id: 3, options: ["sin", "cos", "tan", "sqrt"],               correct: "sin" },
      { id: 4, options: ["and", "or", "not", "in"],                  correct: "and" },
    ],
  },

  {
    id: 49, section: 7, points: 1,
    topic: "def con for, float(input()) y numpy — recopilar y filtrar",
    question: "Completa la función que lee n datos con float(input()), filtra positivos y crea un array numpy:",
    code:
`import numpy [1] np

def procesar_datos():
    n = [2](input("¿Cuántos datos? "))
    datos = []
    for i in range(n):
        val = [3](input(f"Dato {i+1}: "))
        if val [4] 0:
            datos.append(val)
        else:
            print("Dato ignorado (no positivo)")
    return np.array(datos)

resultado = procesar_datos()
print(f"Array final: {resultado}")`,
    blanks: [
      { id: 1, options: ["as", "import", "from", "="],               correct: "as" },
      { id: 2, options: ["int", "float", "str", "input"],            correct: "int" },
      { id: 3, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 4, options: [">", "<", ">=", "!="],                      correct: ">" },
    ],
  },

  {
    id: 50, section: 7, points: 1,
    topic: "from math import — información de círculo con for y elif",
    question: "Completa la función que usa pi, sqrt y floor para describir círculos clasificados por tamaño:",
    code:
`from math import sqrt, [1], floor

def info_circulo(radio_str):
    r = [2](radio_str)
    area = [1] * r ** 2
    circunferencia = 2 * [1] * r
    area_entera = [3](area)
    diagonal = sqrt(2) * r
    if r [4] 10:
        categoria = "Grande"
    elif r >= 5:
        categoria = "Mediano"
    else:
        categoria = "Pequeño"
    return round(area, 2), round(circunferencia, 2), area_entera, categoria

for rad in ["3", "7.5", "12"]:
    a, c, ae, cat = info_circulo(rad)
    print(f"r={rad}: Área={a}, Circ={c}, ÁreaEntera={ae}, Cat={cat}")`,
    blanks: [
      { id: 1, options: ["pi", "e", "tau", "inf"],                   correct: "pi" },
      { id: 2, options: ["float", "int", "str", "round"],            correct: "float" },
      { id: 3, options: ["floor", "ceil", "round", "int"],           correct: "floor" },
      { id: 4, options: [">=", ">", "<=", "=="],                     correct: ">=" },
    ],
  },
];
