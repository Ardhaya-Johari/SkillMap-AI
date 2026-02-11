interface SkillCardProps {
  name: string;
  level: number;
  onEdit?: () => void;
  onDelete?: () => void;
}

const SkillCard = ({ name, level, onEdit, onDelete }: SkillCardProps) => {
  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 
                    p-4 rounded-2xl shadow-lg 
                    flex justify-between items-center mb-3
                    hover:bg-white/20 transition-all duration-300">

      <div>
        <h3 className="text-white font-semibold text-lg">{name}</h3>
        <p className="text-gray-300 text-sm mt-1">
          Level: <span className="text-indigo-400 font-medium">{level}/5</span>
        </p>

        {/* Progress Bar */}
        <div className="w-40 bg-white/20 h-2 rounded-full mt-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(level / 5) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex gap-2">
        {onEdit && (
          <button
            onClick={onEdit}
            className="px-3 py-1 rounded-lg 
                       bg-indigo-500/80 hover:bg-indigo-600
                       text-white text-sm transition"
          >
            Edit
          </button>
        )}

        {onDelete && (
          <button
            onClick={onDelete}
            className="px-3 py-1 rounded-lg 
                       bg-rose-500/80 hover:bg-rose-600
                       text-white text-sm transition"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
