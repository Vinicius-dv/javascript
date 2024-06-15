class Cursos{
    static cursos = ['java','typescript','javascript','c++']


    static getTodos_cursos = ()=>{
        return this.cursos
    }
    static getcurso = (i_curso)=>{
        return this.cursos[i_curso]
    }   
    static addCurso = (novoCurso)=>{
        this.cursos.push(novoCurso)
    }
    static apagarCurso = ()=>{
        this.cursos = []
    }



}



export default Cursos