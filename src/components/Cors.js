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
