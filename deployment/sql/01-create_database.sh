psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname = 'mds_review'" | grep -q 1 || psql -U postgres -c "CREATE DATABASE mds_review"
