import pyodbc
# Driver={ODBC Driver 18 for SQL Server};Server=tcp:sayanwita-sql.database.windows.net,1433;Database=SmartDoc;Uid=sayanwitaSQL;Pwd={your_password_here};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;
server = 'sayanwita-sql.database.windows.net'
database = 'SmartDoc'
username = 'sayanwitaSQL'
password = '6qa!M#TiM#KdSgf'
driver = '{ODBC Driver 18 for SQL Server}'

conn = pyodbc.connect(
    f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password};Encrypt=yes;TrustServerCertificate=no'
)

cursor = conn.cursor()
cursor.execute("SELECT TOP 10 * FROM SalesLT.Customer")

for row in cursor.fetchall():
    print(row)

