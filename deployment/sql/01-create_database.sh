psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'mds-review'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE mds-review"
