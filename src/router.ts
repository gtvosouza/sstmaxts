import {Router} from 'express';

//Controller
import { empresaController } from './controllers/EmpresasController';
import { funcoesController } from './controllers/FuncoesController';
import { tipoExameController } from './controllers/TipoExameController';

const router: Router = Router();

router.get("/empresas", empresaController.index);
router.post("/empresas", empresaController.createUpdateEmpresaAsync);
router.put("/empresas", empresaController.createUpdateEmpresaAsync);

router.post("/empresas/funcoes/:idEmpresa", empresaController.createOrUpdateFuncaoAsync);
router.post("/empresas/ambientes/:idEmpresa", empresaController.createOrUpdateAmbienteAsync);
router.post("/empresas/funcionarios/:idEmpresa", empresaController.createOrUpdateFuncionarioAsync);

router.get("/funcoes", funcoesController.index);
router.post("/funcoes", funcoesController.createUpdateFuncaoAsync);
router.put("/funcoes", funcoesController.createUpdateFuncaoAsync);

router.get("/tipoExame", tipoExameController.index);
router.post("/tipoExame", tipoExameController.createUpdateTipoExameAsync);
router.put("/tipoExame", tipoExameController.createUpdateTipoExameAsync);

export {router}; 