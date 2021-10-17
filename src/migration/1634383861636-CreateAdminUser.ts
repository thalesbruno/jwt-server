import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from '../model/User';

export class CreateAdminUser1634383861636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const adminUser = new User();
    adminUser.username = 'admin';
    adminUser.password = 'admin';
    adminUser.hashPassword();
    adminUser.role = 'ADMIN';
    const userRepository = getRepository(User);
    userRepository.save(adminUser);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
