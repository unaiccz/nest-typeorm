import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
    export class Video { 
        @PrimaryGeneratedColumn()
    id:                 number;
    @Column({ length: 15 })
    titulo:             string
    @Column({ length: 500 })
    descripcion:             string
    @Column({ length: 12 })
    url:             string
    @Column({ length: 13 })
    imagen:             string
    @CreateDateColumn({type:'timestamp'})
    CreatedAt: Date

}
