Server=DESKTOP-DQ81I8K\SQLEXPRESS;Database=PagosApi;ConnectRetryCount=0;Encrypt=True;Trusted_Connection=True;TrustServerCertificate=True
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowAll", builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
    });
app.UseCors("AllowAll");
// Relación: un cliente puede tener muchas ventas
    public ICollection<Venta> Ventas { get; set; }






using System;
using System.Collections.Generic;

namespace ResumenBasicoCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            // ASIGNACIONES
            int numero = 10;
            string nombre = "Juan";
            bool activo = true;
            double precio = 99.99;

            // CONDICIONALES
            if (numero > 5)
            {
                Console.WriteLine("El número es mayor que 5");
            }
            else
            {
                Console.WriteLine("El número es 5 o menor");
            }

            // SWITCH
            int dia = 3;
            switch (dia)
            {
                case 1:
                    Console.WriteLine("Lunes");
                    break;
                case 2:
                    Console.WriteLine("Martes");
                    break;
                case 3:
                    Console.WriteLine("Miércoles");
                    break;
                default:
                    Console.WriteLine("Otro día");
                    break;
            }

            // BUCLE FOR
            for (int i = 0; i < 3; i++)
            {
                Console.WriteLine("For i = " + i);
            }

            // BUCLE WHILE
            int contador = 0;
            while (contador < 3)
            {
                Console.WriteLine("While contador = " + contador);
                contador++;
            }

            // BUCLE DO-WHILE
            int j = 0;
            do
            {
                Console.WriteLine("Do-While j = " + j);
                j++;
            } while (j < 3);

            // FOREACH
            string[] frutas = { "Manzana", "Banana", "Pera" };
            foreach (string fruta in frutas)
            {
                Console.WriteLine("Fruta: " + fruta);
            }

            // FUNCIONES
            Saludar("Carlos");
            int suma = Sumar(5, 7);
            Console.WriteLine("Suma: " + suma);

            // CLASES Y OBJETOS
            Persona persona1 = new Persona();
            persona1.Nombre = "Lucía";
            persona1.Edad = 30;
            persona1.MostrarInfo();

            // LISTAS
            List<string> ciudades = new List<string> { "Buenos Aires", "Córdoba", "Rosario" };
            ciudades.Add("Mendoza");

            foreach (var ciudad in ciudades)
            {
                Console.WriteLine("Ciudad: " + ciudad);
            }

            // MANEJO DE ERRORES
            try
            {
                int resultado = 10 / 0;
            }
            catch (DivideByZeroException ex)
            {
                Console.WriteLine("Error: División por cero");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Error general: " + ex.Message);
            }
            finally
            {
                Console.WriteLine("Bloque finally ejecutado");
            }
        }

        // Función void
        static void Saludar(string nombre)
        {
            Console.WriteLine("Hola, " + nombre);
        }

        // Función con retorno
        static int Sumar(int a, int b)
        {
            return a + b;
        }
    }

    // Clase Persona
    class Persona
    {
        public string Nombre { get; set; }
        public int Edad { get; set; }

        public void MostrarInfo()
        {
            Console.WriteLine($"Nombre: {Nombre}, Edad: {Edad}");
        }
    }
}
