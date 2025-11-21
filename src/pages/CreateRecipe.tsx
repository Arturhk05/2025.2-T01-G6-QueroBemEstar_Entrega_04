import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/templates/MainLayout';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { recipeService } from '@/services/api';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { token, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    ingredientes: [''],
    modoPreparo: '',
    fotoUrl: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-destructive/10 border border-destructive rounded-lg p-6">
            <p className="text-destructive font-semibold">Você precisa estar logado para criar uma receita</p>
            <Button onClick={() => navigate('/login')} className="mt-4 w-full bg-primary hover:bg-primary/90">
              Ir para Login
            </Button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...formData.ingredientes];
    newIngredients[index] = value;
    setFormData((prev) => ({
      ...prev,
      ingredientes: newIngredients,
    }));
  };

  const addIngredient = () => {
    setFormData((prev) => ({
      ...prev,
      ingredientes: [...prev.ingredientes, ''],
    }));
  };

  const removeIngredient = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      ingredientes: prev.ingredientes.filter((_, i) => i !== index),
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.titulo.trim()) {
      setError('Título é obrigatório');
      return false;
    }
    if (formData.titulo.trim().length < 10) {
      setError('Título deve ter no mínimo 10 caracteres');
      return false;
    }
    if (!formData.descricao.trim()) {
      setError('Descrição é obrigatória');
      return false;
    }
    if (formData.descricao.trim().length < 10) {
      setError('Descrição deve ter no mínimo 10 caracteres');
      return false;
    }
    if (formData.ingredientes.filter((ing) => ing.trim()).length === 0) {
      setError('Adicione pelo menos um ingrediente');
      return false;
    }
    if (!formData.modoPreparo.trim()) {
      setError('Modo de preparo é obrigatório');
      return false;
    }
    if (formData.modoPreparo.trim().length < 10) {
      setError('Modo de preparo deve ter no mínimo 10 caracteres');
      return false;
    }
    if (!formData.fotoUrl.trim()) {
      setError('URL da foto é obrigatória');
      return false;
    }
    try {
      new URL(formData.fotoUrl);
    } catch {
      setError('URL da foto é inválida');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    if (!token) {
      setError('Token de autenticação não encontrado');
      return;
    }

    setLoading(true);

    try {
      const result = await recipeService.createRecipe(
        {
          titulo: formData.titulo,
          descricao: formData.descricao,
          ingredientes: formData.ingredientes.filter((ing) => ing.trim()),
          modoPreparo: formData.modoPreparo,
          fotoUrl: formData.fotoUrl,
        },
        token
      );

      if (result.success) {
        setSuccess(true);
        setFormData({
          titulo: '',
          descricao: '',
          ingredientes: [''],
          modoPreparo: '',
          fotoUrl: '',
        });
        setTimeout(() => {
          navigate('/receitas');
        }, 2000);
      } else {
        setError(result.error || 'Erro ao criar receita');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate('/receitas')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar para receitas
          </button>

          <div className="bg-card rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Criar Receita</h1>
            <p className="text-muted-foreground mb-6">Compartilhe sua receita deliciosa com a comunidade</p>

            {error && (
              <div className="bg-destructive/10 border border-destructive rounded-lg p-4 mb-6">
                <p className="text-destructive font-semibold">{error}</p>
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-700 font-semibold">✓ Receita criada com sucesso! Redirecionando...</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Título */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Título da Receita *</label>
                <input
                  type="text"
                  value={formData.titulo}
                  onChange={(e) => handleInputChange(e, 'titulo')}
                  placeholder="Digite um título atrativo para sua receita"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  maxLength={255}
                />
                <p className="text-xs text-muted-foreground mt-1">{formData.titulo.length}/255 caracteres</p>
              </div>

              {/* Descrição */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Descrição *</label>
                <textarea
                  value={formData.descricao}
                  onChange={(e) => handleInputChange(e, 'descricao')}
                  placeholder="Descreva sua receita detalhadamente"
                  rows={4}
                  maxLength={1000}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1">{formData.descricao.length}/1000 caracteres</p>
              </div>

              {/* Ingredientes */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">Ingredientes *</label>
                <div className="space-y-2">
                  {formData.ingredientes.map((ingrediente, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={ingrediente}
                        onChange={(e) => handleIngredientChange(index, e.target.value)}
                        placeholder={`Ingrediente ${index + 1}`}
                        className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      {formData.ingredientes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeIngredient(index)}
                          className="px-4 py-2 rounded-lg border border-destructive/30 bg-destructive/5 text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addIngredient}
                  className="mt-3 flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 text-primary hover:bg-primary/10 transition-colors font-medium"
                >
                  <Plus className="h-4 w-4" />
                  Adicionar Ingrediente
                </button>
              </div>

              {/* Modo de Preparo */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Modo de Preparo *</label>
                <textarea
                  value={formData.modoPreparo}
                  onChange={(e) => handleInputChange(e, 'modoPreparo')}
                  placeholder="Descreva o passo a passo do preparo"
                  rows={5}
                  maxLength={2000}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1">{formData.modoPreparo.length}/2000 caracteres</p>
              </div>

              {/* URL da Foto */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">URL da Foto *</label>
                <input
                  type="url"
                  value={formData.fotoUrl}
                  onChange={(e) => handleInputChange(e, 'fotoUrl')}
                  placeholder="https://exemplo.com/foto.jpg"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {formData.fotoUrl && (
                  <div className="mt-3 rounded-lg overflow-hidden border border-input">
                    <img
                      src={formData.fotoUrl}
                      alt="Preview"
                      className="w-full h-64 object-cover"
                      onError={() => console.log('Erro ao carregar imagem')}
                    />
                  </div>
                )}
              </div>

              {/* Botões de Ação */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" disabled={loading} className="flex-1 bg-primary hover:bg-primary/90 text-lg py-6">
                  {loading ? 'Criando...' : 'Criar Receita'}
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate('/recipes')}
                  variant="outline"
                  className="flex-1 text-lg py-6"
                  disabled={loading}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CreateRecipe;
