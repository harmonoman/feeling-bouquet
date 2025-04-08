```mermaid
erDiagram

    NURSERIES ||--o{ NURSERY_FLOWERS : grows
    FLOWERS   ||--o{ NURSERY_FLOWERS : is_grown_by

    NURSERIES {
        int id pk
        string name
        string location
    }

    FLOWERS {
        int id pk
        string commonName
        string color
    }

    NURSERY_FLOWERS {
        int id pk
        int nurseryId fk
        int flowerId fk
    }